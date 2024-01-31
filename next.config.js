const nextConfig = {
  images: {
    domains: ["personal-website-assets.nyc3.cdn.digitaloceanspaces.com."],
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
