/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipMiddlewareUrlNormalize: true,
  images: {
    domains: ['baseaim.com', 'widgets.sociablekit.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Note: unoptimized is required for static export
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Enable SWC minification for better performance
  swcMinify: true,
  // Optimize font loading
  optimizeFonts: true
};

module.exports = nextConfig;