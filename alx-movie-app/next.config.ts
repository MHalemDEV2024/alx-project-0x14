import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'], // أضف هنا أي دومين آخر تستخدمه للصور
  },
};

export default nextConfig;
