/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    // removeConsole: {
    //   exclude: ["error"],
    // },
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   // enabled: process.env.ANALYZE === "true",
//   enabled: true,
// });
// nextConfig = withBundleAnalyzer(nextConfig);

module.exports = nextConfig;
