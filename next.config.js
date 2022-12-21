/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['techcrunch.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techcrunch.com',
        pathname: '/images/*'
      }
    ]
  }
}

module.exports = nextConfig
