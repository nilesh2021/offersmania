import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/software/avast-antivirus-alt",
        destination: "/software/avast-offers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
