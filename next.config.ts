import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Set to true to ignore ESLint errors during builds if needed
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Set to true to ignore TS build errors during builds if needed
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
