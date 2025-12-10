/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,



  experimental: {
    // لازم تكون Object مش Boolean
    serverActions: {},
    // لو مش محتاج Server Actions خالص ممكن تشيل experimental كله
  },
};

export default nextConfig;
