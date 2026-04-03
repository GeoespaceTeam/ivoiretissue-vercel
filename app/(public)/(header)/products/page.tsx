import { redirect } from "next/navigation";

export default function ProductsIndexPage() {
  // 自动重定向到竹子产品分类
  redirect("/products/bamboo");
}
