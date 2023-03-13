/**
 * webpack.config.js
 * ----------------
 * DESCRIPTION:
 * This is the Configuration file for Webpack.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 04/03/2023
 * LAST UPDATE: 04/03/2023
 */

// Requires
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

// System Variables
const paths = {
  src: {
    html: "./src/html",
    js: "./src/js",
    sass: "./src/sass",
    img: "./src/img",
  },
  dist: {
    html: "./",
    js: "./js",
    css: "./css",
    img: "./img",
  },
};

module.exports = {
  mode: "production",
  entry: {
    navbar: [paths.src.js + "/navbar.js", paths.src.sass + "/styles.scss"],
    "home-page": paths.src.js + "/home-page.js",
    "best-sellers": paths.src.js + "/best-sellers.js",
    "order-now": paths.src.js + "/order-now.js",
    "contact-us": paths.src.js + "/contact-us.js",
    "hero-images": paths.src.js + "/hero-images.js",
  },
  output: {
    filename: paths.dist.js + "/[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: paths.src.html,
          to: paths.dist.html,
        },
        {
          from: paths.src.img,
          to: paths.dist.img,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: paths.dist.css + "/styles.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
