/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // O '**' permite qualquer domínio
      },
      // Se precisar suportar http também, adicione outro objeto:
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
