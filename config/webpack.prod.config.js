const webpackMerge = require("webpack-merge")
const path = require("path")
const webpack = require("webpack")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const commonConfig = require("./webpack.common.config")

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
      "react-router-dom",
      "prop-types",
      "redux",
      "redux-thunk",
      "react-redux",
      "redux-persist",
      "react-loadable"
    ]
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "js/[name].[chunkhash].js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules")
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.RuntimeChunkPlugin({
      name: "manifest"
    }),
    new webpack.optimize.SplitChunksPlugin({
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        index: {
          name: "index",
          chunks: "initial",
          minChunks: Infinity
        },
        vendor: {
          name: "vendor",
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, 
          minSize: 0
        }
      }
    }),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name
      }
      return Array.from(chunk.modulesIterable, m => m.id).join("_")
    })
  ]
})