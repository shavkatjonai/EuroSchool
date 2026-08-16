import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Statik Netlify buildida /_next/image serveri bo'lmaydi.
  // Rasmlar public/assets papkasidan to'g'ridan-to'g'ri yuklanadi.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
