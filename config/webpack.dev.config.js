const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]--[local]__[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  require("autoprefixer")
                ]
              }
            }
          ]
        }),
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules")
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "image/[name].[hash:5].[ext]"
            }
          },
          {
            loader: "image-webpack-loader"
          }
        ],
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules")
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "font/[name].[md5:hash:hex:7].[ext]"
        },
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].[contenthash:5].css",
      allChunks: true
    })
  ]
}