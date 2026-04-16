"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { newsDatabase } from "@/app/lib/newsDatabase";

const POSTS_PER_PAGE = 12;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = useMemo(() => {
    return Object.keys(newsDatabase)
      .map((key) => ({ id: key, ...newsDatabase[key] }))
      .sort((a, b) => Number(b.id) - Number(a.id));
  }, []);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return allPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, allPosts]);

  return (
    <main
      style={{ backgroundColor: "#f4f7f6", fontFamily: "Poppins, sans-serif" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        /* 替换原本的 .news-hero */
        .news-hero {
          background: linear-gradient(135deg, #004e46 0%, #00a496 100%); /* 品牌深绿到亮绿的高级渐变 */
          padding: 100px 0; 
          text-align: center;
          position: relative;
          box-shadow: inset 0 -10px 30px rgba(0,0,0,0.1); /* 底部加一点内阴影增加层次感 */
        }
        .kt-post-loop { display: flex; flex-direction: column; gap: 30px; padding: 60px 0; }
       /* --- 卡片高级外观：纯白底色 + 柔和边框 + 品牌色悬浮阴影 --- */
        .kt-blocks-post-grid-item {
          background-color: #ffffff; 
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }
        .kt-blocks-post-grid-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 164, 150, 0.12); /* 悬浮时透出淡淡的品牌绿光 */
          border-color: rgba(0, 164, 150, 0.3);
        }

        /* --- 图片比例与圆角优化 --- */
        .kt-feat-image-align-left { display: grid; grid-template-columns: 32% auto; align-items: stretch; }
        .kadence-post-image { padding: 25px; }
        .kadence-post-image-intrisic { position: relative; height: 100%; min-height: 200px; }
        .kadence-post-image-inner-wrap img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
        
        /* --- 文本排版优化 --- */
        .kt-blocks-post-grid-item-inner { padding: 30px 40px 30px 10px; display: flex; flex-direction: column; justify-content: center; }
        .entry-title { font-size: 24px; line-height: 1.4; margin: 0 0 12px; font-weight: 800; }
        .entry-title a { text-decoration: none; color: #111; transition: 0.3s; }
        .entry-title a:hover { color: #00a496; }
        .kt-blocks-post-top-meta { color: #888; font-size: 13px; margin-bottom: 15px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }
        .entry-content { font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 20px; }
        
        /* --- 按钮品牌化：现代镂空圆角按钮 --- */
        .kt-blocks-post-readmore {
          display: inline-block; 
          background-color: transparent; 
          color: #00a496;
          border: 2px solid #00a496;
          padding: 8px 24px; 
          text-decoration: none; 
          font-size: 15px; 
          font-weight: 700;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .kt-blocks-post-readmore:hover { 
          background-color: #00a496; 
          color: #fff; 
          box-shadow: 0 8px 20px rgba(0, 164, 150, 0.3);
        }
        .pagination { display: flex; justify-content: center; gap: 10px; margin: 40px 0 80px; }
        .page-num { padding: 10px 20px; border: 2px solid #eee; color: #aaa; cursor: pointer; font-weight: 700; border-radius: 4px; background: #fff; }
        .page-num.active { background: #777; border-color: #777; color: #fff; }
        @media (max-width: 767px) { .kt-feat-image-align-left { grid-template-columns: 1fr; } }
      `,
        }}
      />

      {/* 替换原本的 news-hero section */}
      <section className="news-hero">
        <div className="container">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "15px",
              letterSpacing: "1px",
              textShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            News & Updates
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2px",
            }}
          >
            HOME / NEWS
          </p>
        </div>
      </section>

      <section className="container">
        <div className="kt-post-loop">
          {currentPosts.map((post) => (
            <article key={post.id} className="kt-blocks-post-grid-item">
              <div className="kt-feat-image-align-left">
                <div className="kadence-post-image">
                  <div className="kadence-post-image-intrisic">
                    <Link
                      href={`/news/${post.id}`}
                      className="kadence-post-image-inner-wrap"
                    >
                      <img src={post.mainImg} alt={post.title} />
                    </Link>
                  </div>
                </div>
                <div className="kt-blocks-post-grid-item-inner">
                  <header>
                    <h2 className="entry-title">
                      <Link href={`/news/${post.id}`}>{post.title}</Link>
                    </h2>
                    <div className="kt-blocks-post-top-meta">
                      Posted on {post.date}
                    </div>
                  </header>
                  <div className="entry-content">
                    {post.content.replace(/<[^>]*>?/gm, "").substring(0, 160)}
                    ...
                    <div className="kt-blocks-post-readmore-wrap">
                      <Link
                        href={`/news/${post.id}`}
                        className="kt-blocks-post-readmore"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => {
                  setCurrentPage(n);
                  window.scrollTo(0, 0);
                }}
                className={`page-num ${currentPage === n ? "active" : ""}`}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
