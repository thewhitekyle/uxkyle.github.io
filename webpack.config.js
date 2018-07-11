const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "webpack-hot-client/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/app.js"
  ],
  output: {
    path: path.join(__dirname, "./"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: "css-loader"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    hot: true,
    contentBase: "./src"
  }
};
