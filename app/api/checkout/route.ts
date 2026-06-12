import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-05-27.dahlia", // 👈 换成 TypeScript 要求的最新版本号
});

export async function POST(req: Request) {
  try {
    const { productId, title, priceInCents, quantity } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${title} (Deposit)`,
            },
            unit_amount: priceInCents, 
          },
          quantity: 1, 
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/products?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
      // 这里的 metadata 是关键，Webhook 发邮件时全靠它认出是哪个产品
      metadata: {
        productId: productId,
        productName: title,
        orderedQuantity: quantity,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}