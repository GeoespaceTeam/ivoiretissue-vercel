import Image from "next/image";
import React from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode; // 用于接收复杂的段落文本
  imageSrc?: string; // 图片路径
  imageAlt?: string;
  reverse?: boolean; // 是否反转排版（比如图片在左，文字在右）
}

export default function ContentSection({
  id,
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
}: ContentSectionProps) {
  return (
    <section id={id} className={`content-section ${reverse ? "reverse" : ""}`}>
      <div className="container split-layout">
        <div className="text-content">
          <h2>{title}</h2>
          {children}
        </div>
        <div className="image-content">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              width={600}
              height={400}
              className="section-image"
            />
          ) : (
            <div className="image-placeholder">Image Placeholder ({title})</div>
          )}
        </div>
      </div>
    </section>
  );
}
