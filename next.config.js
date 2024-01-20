const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    images: {
        domains: ['personal-website-assets.nyc3.cdn.digitaloceanspaces.com.'],
        formats: ['image/avif', 'image/webp'],
    },

}

module.exports = nextConfig