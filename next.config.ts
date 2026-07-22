// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextconfig = {
  experimental: {
    // تحديد الجذر الصحيح للمشروع
  },
  turbopack: {
    root: './',
  },
};

export default nextconfig;