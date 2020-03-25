const withCSS = require("@zeit/next-css");
require("dotenv").config();
const webpack = require("webpack");
const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");

const config = withCSS(
  withOptimizedImages({
    webpack(config, options) {
      // config.assetPrefix =
      //   process.env.NODE_ENV === "production"
      //     ? "https://assets.annosuite.com"
      //     : "";
      config.module.rules.push({
        test: /\.js$/,
        use: [
          {
            loader: "linaria/loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production"
            }
          }
        ]
      });

      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: "graphql-tag/loader"
        }
      });

      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});

      /** Allows you to create global constants which can be configured
       * at compile time, which in our case is our environment variables
       */
      config.plugins.push(new webpack.DefinePlugin(env));

      return config;
    }
  })
  // )
);

// // static pages
config.exportPathMap = function() {
  return {
    "/": { page: "/" },
    "/privacy-policy": { page: "/privacy-policy" },
    "/terms-of-service": { page: "/terms-of-service" }
    //   "/*": { page: "/_error" }
  };
};

module.exports = config;
