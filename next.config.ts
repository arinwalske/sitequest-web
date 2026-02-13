import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
return [
    {
      // This handles the Auth service specifically
      source: '/auth/v1/:path*',
      destination: 'https://bmbgppgkquphghhzorqh.supabase.co/auth/v1/:path*',
    },
    {
      // This handles the Database/Rest service
      source: '/rest/v1/:path*',
      destination: 'https://bmbgppgkquphghhzorqh.supabase.co/rest/v1/:path*',
    },
  ];
},
};

export default nextConfig;
