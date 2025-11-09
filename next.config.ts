import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    env: {
        NEXT_PUBLIC_NAVER_CLIENT_ID: "belzz8n1ww",
    },
  reactStrictMode: true,
};

export default nextConfig;
