const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
//환경변수 셋팅
const dotenv = require("dotenv");
dotenv.config({ path: `${path.resolve(__dirname, "../.env")}` });

module.exports = {
  entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
