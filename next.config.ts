import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
  },
  images: {
    remotePatterns: [new URL('https://image.tmdb.org/t/p/w500/**')],
  },
};

export default nextConfig;
