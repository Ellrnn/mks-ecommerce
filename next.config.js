/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.zst.com.br",
      },
    ],
  },
};

module.exports = nextConfig;
