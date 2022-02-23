const path = require("path");
const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniExtractPlagin = require("mini-css-extract-plugin");

module.exports = {
  // mode: "development",
  entry: "./js/index.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif|mp3|mp4)$/i,
        loader: "img-optimize-loader",
        options: {
          compress: {
            mode: "high",
            webp: true,
            gifsicle: true,
            disableOnDevelopment: false,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniExtractPlagin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniExtractPlagin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ template: resolve(__dirname, "index.html") }),
    new MiniExtractPlagin({
      filename: "[name].[contenthash].css",
    }),
  ],
  devServer: {
    port: 3000,
  },
};
