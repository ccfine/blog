const webpackMerge = require("webpack-merge")
const path = require("path")
const webpack = require("webpack")
const commonConfig = require("./webpack.common.config.js")

module.exports = webpackMerge(commonConfig, {
  mode: "production",
  entry: {
    index: [
      "babel-polyfill",
      path.join(__dirname, "../src/index.js")
    ],
    vendor: [
      "react",
      "react-dom",
      "react-router-dom"
    ]
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "js/[name].[chunkhash].js"
  }
})