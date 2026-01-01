/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
        pathname: "/api/**", // Permite caminhos que começam com /api/
      },
    ],
  },
};

export default nextConfig;
