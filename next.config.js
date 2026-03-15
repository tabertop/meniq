/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Forces a new buildId on every deploy = no stale Vercel build cache
  generateBuildId: async () => {
    return process.env.VERCEL_GIT_COMMIT_SHA || Date.now().toString();
  },
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