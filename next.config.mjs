/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Add your env variables here
        DATABASE_URL: process.env.NEXT_PUBLIC_NEON_PUBLIC_DATABASE_URL,
        WEB3_AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
export default nextConfig;
