import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */

// next.config.js
const nextConfig = {
    pageExtensions: ["ts", "tsx", "md", "mdx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Disables TypeScript errors during build
  },
};

module.exports = nextConfig;

export default withMDX(nextConfig);
