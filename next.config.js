/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/business-design-kit',
  assetPrefix: '/business-design-kit'
};

module.exports = nextConfig;