import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-05-27.dahlia", // 👈 换成 TypeScript 要求的最新版本号
});
const resend = new Resend(process.env.RESEND_API_KEY as string);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: Request) {
  const body = await req.text();
 const headersList = await headers();
  const signature = headersList.get("Stripe-Signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // 如果支付成功
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // 从 Stripe 抓取关键信息
    const productName = session.metadata?.productName || "Unknown Product";
    const quantity = session.metadata?.orderedQuantity || "1";
    const amountTotal = (session.amount_total! / 100).toFixed(2);
    
    // 👇 这里绝对能拿到客户付款时填的邮箱和名字
    const customerEmail = session.customer_details?.email || "No email provided";
    const customerName = session.customer_details?.name || "Customer";

    try {
      // 触发 Resend 给你老板发邮件
     await resend.emails.send({
        from: "Ivoire System <onboarding@resend.dev>",
        to: "database@geoespace.ca", 
        replyTo: customerEmail, // 👈 改成驼峰命名 replyTo
        subject: `💰 New Payment Received: $${amountTotal} from ${customerName}`,
        html: `
          <h2>New Order Paid via Stripe!</h2>
          <hr />
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> ${customerName}</p>
          <p><strong>Email:</strong> <span style="color: blue;">${customerEmail}</span></p>
          <hr />
          <h3>Order Details:</h3>
          <p><strong>Product:</strong> ${productName} (x${quantity})</p>
          <p><strong>Total Paid:</strong> $${amountTotal} USD</p>
          <br/>
          <p><em>Click "Reply" to this email to directly contact the customer (${customerEmail}).</em></p>
        `,
      });
    } catch (error) {
      console.error("Resend Error:", error);
    }
  }

  return NextResponse.json({ received: true });
}