/** @type {import("next").NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    // removeConsole: {
    //   exclude: ["error"],
    // },
  },
  exportPathMap: async (
    defaultPathMap, 
    { dev, dir, outDir, distDir, buildId },
  ) => ({
    "/": { page: "/", },
    "/html-tag": { page: "/html-tag", },
  }),
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   // enabled: process.env.ANALYZE === "true",
//   enabled: true,
// });
// nextConfig = withBundleAnalyzer(nextConfig);

module.exports = nextConfig;
