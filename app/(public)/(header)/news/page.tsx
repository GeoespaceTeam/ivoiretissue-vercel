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
      style={{ backgroundColor: "#fff", fontFamily: "Poppins, sans-serif" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .news-hero {
          background-image: url('https://www.cndonseapaper.com/wp-content/uploads/2025/04/boo-bg-3.png');
          background-size: auto; background-position: center center; background-attachment: fixed;
          background-repeat: no-repeat; background-color: rgba(255,255,255,0.50);
          padding: 80px 0; text-align: center;
        }
        .kt-post-loop { display: flex; flex-direction: column; gap: 30px; padding: 60px 0; }
        .kt-blocks-post-grid-item {
          background-color: rgba(255,255,255,0.81); overflow: hidden;
          box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2); border-radius: 4px;
        }
        .kt-feat-image-align-left { display: grid; grid-template-columns: 28% auto; }
        .kadence-post-image { padding: 16px; }
        .kadence-post-image-intrisic { position: relative; padding-bottom: 66.67%; height: 0; }
        .kadence-post-image-inner-wrap img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 4px; }
        .kt-blocks-post-grid-item-inner { padding: 1.5rem; display: flex; flex-direction: column; justify-content: center; }
        .entry-title { font-size: 24px; line-height: 1.3; margin: 0 0 10px; font-weight: 700; }
        .entry-title a { text-decoration: none; color: #1A202C; transition: 0.3s; }
        .entry-title a:hover { color: #00a496; }
        .kt-blocks-post-top-meta { color: #777777; font-size: 14px; margin-bottom: 15px; }
        .entry-content { font-size: 15px; line-height: 1.6; color: #555; }
        .kt-blocks-post-readmore {
          display: inline-block; background-color: #3182CE; color: #fff;
          padding: 6px 16px; margin-top: 15px; text-decoration: none; font-size: 14px; border-radius: 4px;
          transition: 0.3s;
        }
        .kt-blocks-post-readmore:hover { background-color: #00a496; }
        .pagination { display: flex; justify-content: center; gap: 10px; margin: 40px 0 80px; }
        .page-num { padding: 10px 20px; border: 2px solid #eee; color: #aaa; cursor: pointer; font-weight: 700; border-radius: 4px; background: #fff; }
        .page-num.active { background: #777; border-color: #777; color: #fff; }
        @media (max-width: 767px) { .kt-feat-image-align-left { grid-template-columns: 1fr; } }
      `,
        }}
      />

      <section className="news-hero">
        <div className="container">
          <h1 style={{ fontSize: "50px", fontWeight: 700, color: "#1A202C" }}>
            News
          </h1>
          <p style={{ color: "#666", fontSize: "14px" }}>HOME / NEWS</p>
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
