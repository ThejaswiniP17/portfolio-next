import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/weather",
        destination: "http://localhost:3001",
        permanent: false,
      },
      {
        source: "/projects/weather-dashboard",
        destination: "http://localhost:3001",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
