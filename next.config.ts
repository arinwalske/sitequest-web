import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'https://bmbgppgkquphghhzorqh.supabase.co/auth/:path*',
      },
      {
        source: '/rest/:path*',
        destination: 'https://bmbgppgkquphghhzorqh.supabase.co/rest/:path*',
      },
      {
        source: '/storage/:path*',
        destination: 'https://bmbgppgkquphghhzorqh.supabase.co/storage/:path*',
      },
      {
        source: '/realtime/:path*',
        destination: 'https://bmbgppgkquphghhzorqh.supabase.co/realtime/:path*',
      },
    ];
  },
};

export default nextConfig;
