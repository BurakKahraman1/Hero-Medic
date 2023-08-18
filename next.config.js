/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
        'dummyimage.com',
        'picsum.photos',
        'images.unsplash.com'
    ],
  },
}

module.exports = nextConfig
