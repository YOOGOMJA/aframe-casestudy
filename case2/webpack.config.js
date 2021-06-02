const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");
module.exports = {
  devtool: "source-map",
  entry: { app: ["babel-polyfill", "./src/index.js"] },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
    webassemblyModuleFilename: "[hash].wasm",
  },
  devServer: {
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|build)/,
        loader: "babel-loader",
      },
      {
        test: /\.(wasm)$/,
        type: "javascript/auto",
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/wasm", //set this whatever path you desire
            publicPath: "/",
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
  watchOptions: {
    ignored: "**/node_modules",
  },
  resolve: {
    extensions: ["", ".jsx", ".js", ".wasm"],
    fallback: {
      fs: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};
