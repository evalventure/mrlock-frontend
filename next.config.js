/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure compatibility with older browsers if needed
  experimental: {
    forceSwcTransforms: true,
  }
};

module.exports = nextConfig;
