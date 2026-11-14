/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === 'true'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: isExport ? 'export' : undefined,
  distDir: isExport ? 'out' : process.env.TALVERIN_DIST || '.next',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
