import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: 'https://haven-dashboard-daniel-cross-projects.vercel.app/',
      },
      {
        source: '/dashboard/:path*',
        destination: 'https://haven-dashboard-daniel-cross-projects.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
