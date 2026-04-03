"use client";

import { useState, useRef } from "react";

interface VideoPlayerClientProps {
  src: string;
  thumbnail: string;
  isYoutube?: boolean;
}

export default function VideoPlayerClient({
  src,
  thumbnail,
  isYoutube = false,
}: VideoPlayerClientProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    if (!isYoutube && videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="video-container">
      {isYoutube ? (
        playing ? (
          <iframe
            src={`${src}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "none", width: "100%", aspectRatio: "16/9" }}
          />
        ) : null
      ) : (
        <video
          ref={videoRef}
          src={src}
          controls={playing}
          preload="metadata"
          controlsList="nodownload"
        />
      )}

      <div
        className={`video-overlay ${playing ? "hidden" : ""}`}
        style={{ backgroundImage: `url(${thumbnail})` }}
        onClick={handlePlay}
        role="button"
        tabIndex={0}
        aria-label="Play Video"
        onKeyDown={(e) => e.key === "Enter" && handlePlay()}
      >
        <div className="play-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
    </div>
  );
}
