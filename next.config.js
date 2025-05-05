/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow all origins in development
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 