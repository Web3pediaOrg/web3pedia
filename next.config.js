/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/saoji',
        destination: '/user/SohamSaoji',
        permanent: true,
      },
      {
        source: '/profile',
        destination: '/user/profile',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
