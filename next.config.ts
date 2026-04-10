import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ivoiretissue.com",
        pathname: "/**",
      },
      // 👈 必须加上这个，否则刚才 Header 里的 Logo 会一直报错
      {
        protocol: "https",
        hostname: "www.cndonseapaper.com",
        pathname: "/**",
      },
      // 为了保险，把没加 www 的也加上
      {
        protocol: "https",
        hostname: "cndonseapaper.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;