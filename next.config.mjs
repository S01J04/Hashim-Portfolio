// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disable ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // disable TypeScript errors during build
  },
};

export default nextConfig; // ✅ Correct export for .mjs
