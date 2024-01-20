const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    domains: ['personal-website-assets.nyc3.cdn.digitaloceanspaces.com.'],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true,
    typescript: {
      ignoreBuildErrors: true,
    },
  },
}

module.exports = nextConfig
