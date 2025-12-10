/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // ⭐ أهم جزء — تعريف نظام اللغة لمنع Shadowing لمسارات API
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
  },

  experimental: {
    serverActions: true, // ضروري جداً لمسارات السيرفر الحديثة
  },
};

export default nextConfig;
