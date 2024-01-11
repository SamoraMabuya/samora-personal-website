const nextConfig = {
  images: {
    domains: ['samoramabuya.com'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'imgix',
    path: 'https://personal-website-assets.nyc3.cdn.digitaloceanspaces.com',

    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
