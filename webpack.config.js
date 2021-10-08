const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./client/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./client/public/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: "./client/public",
    },
    hot: true,
  },
};