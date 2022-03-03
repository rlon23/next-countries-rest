/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,

  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
  },
};