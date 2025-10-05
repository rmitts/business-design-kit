import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/business-design-kit',
  assetPrefix: '/business-design-kit'
};

export default nextConfig;
