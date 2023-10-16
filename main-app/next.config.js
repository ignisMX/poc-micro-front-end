const NextFederationPlugin = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "main-app",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          users:
            "users@http://localhost:4000/_next/static/chunks/remoteEntry.js",
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
