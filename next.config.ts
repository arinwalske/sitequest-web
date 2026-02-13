import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'https://bmbgppgkquphghhzorqh.supabase.co/:path*',
      },
    ];
  },
};

export default nextConfig;
