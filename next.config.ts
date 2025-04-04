import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
};

export default nextConfig;
