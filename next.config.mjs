/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict error checking for production
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['app', 'components', 'lib', 'hooks'],
  },
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json',
  },
  // Image optimization for production
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // Production optimizations
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  // Performance optimization
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/*'],
  },
}

export default nextConfig