"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

export default function CategoryBanner() {
  const params = useParams();
  // 保持 category 用于 alt 文字，但不影响 src
  const category = params.category || "bamboo";

  return (
    // 1. 最外层容器保持 container 样式
    <div className="w-full mb-0">
      {/* 👇 2. 核心修改：创建一个强力控制高度的“外壳 div” 👇
        - 'relative': 必需，因为里面的 Image 要用 'fill'。
        - 'w-full': 占满宽度。
        - 'h-[...]': 这是你可以精准控制高度的地方！
          我设置了手机端 80px，电脑端(md) 110px。这已经是真正扁平、被压缩的状态了。
          你可以随意把 '110' 改成更小的数字（比如 80, 70）直到满意为止。
        - 'overflow-hidden rounded-lg shadow-sm': 把样式加在这个外壳上。
      */}
      <div className="relative w-full h-[300px] md:h-[300px] overflow-hidden rounded-lg shadow-sm">
        <Image
          // 👇 3. 严格遵守你的要求：绝对不改图片名，保持静态路径 👇
          src={`/images/category-banner.jpg`}
          alt={`${category} products banner`}
          // 👇 4. 关键：使用 'fill' 布局。这会让图片填满上面的相对父级 div，从而受制于父级的高度 👇
          fill
          // 'object-cover': 裁剪图片以填满，不会拉伸变形。
          className="object-cover"
          // 'priority': 优化加载
          priority
        />
      </div>
    </div>
  );
}
