const NextFederationPlugin = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "users",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ItemsButton": "./src/components/ItemsButton.jsx",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
