/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/images/:path*.png',
        headers: [{ key: 'Content-Type', value: 'image/png' }],
      },
      {
        source: '/images/:path*.jpg',
        headers: [{ key: 'Content-Type', value: 'image/jpeg' }],
      },
    ]
  },
}

module.exports = nextConfig