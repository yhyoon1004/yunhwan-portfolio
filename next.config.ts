import type { NextConfig } from "next";

module.exports = { output: 'standalone' };

const nextConfig: NextConfig = {
    env: {
        naverClientId: "belzz8n1ww",
    },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
