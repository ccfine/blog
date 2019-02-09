const path = require("path")

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/bundle.[hash].js"
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules")
      }
    ]
  }
}