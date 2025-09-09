import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Commented out to enable API routes
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
