const webpackMerge = require("webpack-merge")
const path = require("path")
const webpack = require("webpack")
const commonConfig = require("./webpack.common.config.js")

module.exports = webpackMerge(commonConfig, {
  mode: "development",
  entry: {
    index: [
      "babel-polyfill",
      path.join(__dirname, "../src/index.js")
    ]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[chunkhash].js"
  },
  devtool: "eval-source-map",
  devServer: {
    host: "localhost",
    port: 3000,
    contentBase: path.join(__dirname, "../dist"),
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true,
    overlay: {
      error: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})