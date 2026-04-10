"use client";

import React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { newsDatabase } from "@/app/lib/newsDatabase";

export default function NewsDetailPage() {
  const { id } = useParams();
  const post = newsDatabase[id as string];

  if (!post) notFound();

  // 获取侧边栏最新的3篇文章（排除当前文章）
  const latestPosts = Object.keys(newsDatabase)
    .filter((k) => k !== id)
    .slice(-3)
    .map((k) => ({ id: k, ...newsDatabase[k] }));

  return (
    <main style={{ backgroundColor: "#fff", paddingBottom: "100px" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .content-layout { display: grid; grid-template-columns: 5fr 2fr; gap: 40px; margin-top: 40px; }
        .kadence-breadcrumbs { padding: 20px 0; font-size: 13px; color: #777; }
        .kadence-breadcrumbs a { color: #00a496; text-decoration: none; }
        .entry-title { font-size: 42px; font-weight: 700; color: #1A202C; line-height: 1.2; margin-bottom: 15px; }
        .entry-meta { font-size: 14px; color: #888; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }
        
        /* 目录 (TOC) 样式 */
        .kb-table-of-content-nav { background: #f9f9f9; border: 1px solid #eee; padding: 25px; margin-bottom: 40px; border-radius: 8px; }
        .kb-table-of-contents-title { font-weight: 700; font-size: 18px; display: block; margin-bottom: 15px; color: #1A202C; }
        .kb-table-of-content-list { list-style: disc; padding-left: 20px; margin: 0; }
        .kb-table-of-content-list li { margin-bottom: 10px; }
        .kb-table-of-content-list a { color: #3182CE; text-decoration: underline; font-size: 15px; transition: 0.3s; }
        .kb-table-of-content-list a:hover { color: #00a496; }

        /* WordPress 文章主体基础排版 */
        .single-content p { font-size: 16px; line-height: 1.8; color: #444; margin-bottom: 25px; }
        .single-content h2, .single-content h3 { font-weight: 700; color: #1A202C; margin: 40px 0 20px; }
        .single-content h2 { font-size: 28px; }
        .single-content h3 { font-size: 22px; }
        .single-content ul, .single-content ol { padding-left: 20px; margin-bottom: 25px; }
        .single-content li { margin-bottom: 10px; line-height: 1.6; color: #444; }
        .single-content strong { color: #222; }
        .single-content a { color: #00a496; text-decoration: underline; }

        /* 图片和表格排版 (严格还原你的CSS源码) */
        .wp-block-image { margin: 30px 0; }
        .aligncenter { display: block; margin-left: auto; margin-right: auto; text-align: center; }
        .single-content img { max-width: 100%; height: auto; border-radius: 8px; }
        .wp-block-table { overflow-x: auto; margin-bottom: 30px; }
        .wp-block-table table { border-collapse: collapse; width: 100%; border: 1px solid #ccc; }
        .wp-block-table th, .wp-block-table td { border: 1px solid #ccc; padding: 12px; text-align: left; }
        .wp-block-table th { background: #f4f4f4; font-weight: 700; color: #1A202C; }

        /* 侧边栏 */
        .sidebar-widget { margin-bottom: 40px; }
        .widget-title { font-size: 20px; font-weight: 700; border-bottom: 2px solid #00a496; padding-bottom: 10px; margin-bottom: 20px; color: #1A202C; }
        .side-post-card { background: #f8f8f8; border: 1px solid #EDF2F7; padding: 15px; margin-bottom: 15px; display: block; text-decoration: none; transition: 0.3s; border-radius: 6px; }
        .side-post-card:hover { border-color: #00a496; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .side-post-card h3 { font-size: 15px; color: #333; margin-top: 10px; line-height: 1.4; font-weight: 700; transition: 0.3s; }
        .side-post-card:hover h3 { color: #00a496; }
        .side-post-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 4px; }

        @media (max-width: 1024px) { 
          .content-layout { grid-template-columns: 1fr; } 
          #secondary { order: 2; margin-top: 40px; }
        }
      `,
        }}
      />

      <div className="container">
        <nav className="kadence-breadcrumbs">
          <Link href="/">Home</Link> / <Link href="/news">News</Link> /{" "}
          <span>{post.title}</span>
        </nav>

        <div className="content-layout">
          <article>
            <header>
              <h1 className="entry-title">{post.title}</h1>
              <div className="entry-meta">Posted on {post.date}</div>
              <img
                src={post.mainImg}
                alt={post.title}
                style={{
                  width: "100%",
                  marginBottom: "40px",
                  borderRadius: "8px",
                }}
              />
            </header>

            {/* TOC 渲染逻辑 */}
            {post.toc && post.toc.length > 0 && (
              <nav className="kb-table-of-content-nav">
                <span className="kb-table-of-contents-title">
                  Table of Contents
                </span>
                <ul className="kb-table-of-content-list">
                  {post.toc.map((item: any, i: number) => (
                    <li key={i}>
                      <a href={`#${item.id}`}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* 文章渲染 (完美匹配刚才的 CSS) */}
            <div
              className="single-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* 侧边栏 Latest Articles */}
          <aside id="secondary">
            <div className="sidebar-widget">
              <h2 className="widget-title">Latest Articles</h2>
              {latestPosts.reverse().map((lp) => (
                <Link
                  key={lp.id}
                  href={`/news/${lp.id}`}
                  className="side-post-card"
                >
                  <img
                    src={lp.mainImg}
                    className="side-post-img"
                    alt={lp.title}
                  />
                  <h3>{lp.title}</h3>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
