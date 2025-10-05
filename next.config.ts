import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure base path for GitHub Pages (will be repository name)
  basePath: process.env.NODE_ENV === 'production' ? '/business-design-kit' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/business-design-kit' : '',
};

export default nextConfig;
