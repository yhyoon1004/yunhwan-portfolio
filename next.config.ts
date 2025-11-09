import type { NextConfig } from "next";

module.exports = { output: 'standalone' };

const nextConfig: NextConfig = {
    output: "standalone",
    env: {
        NEXT_PUBLIC_NAVER_CLIENT_ID: "belzz8n1ww",
    },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
