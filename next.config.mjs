/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.glsl": {
          loaders: ["raw-loader"],
        },
      },
    },
  },
};

export default nextConfig;
