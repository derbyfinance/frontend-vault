/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vaults',
        permanent: false,
      },
    ];
  },
};
