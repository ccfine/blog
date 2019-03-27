const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  resolve: {
    alias: {
      components: path.join(__dirname, "../src/components"),
      pages: path.join(__dirname, "../src/pages"),
      css: path.join(__dirname, "../src/css"),
      assets: path.join(__dirname, "../src/assets"),
      images: path.join(__dirname, "../src/assets/images"),
      actions: path.join(__dirname, "../src/redux/actions"),
      reducers: path.join(__dirname, "../src/redux/reducers")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader",
            options: {
              singleton: true
            }
          },
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]--[local]__[hash:base64]"
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
              name: "image/[name].[hash].[ext]"
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
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "font/[name].[md5:hash:hex].[ext]"
        },
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      favicon: path.join(__dirname, "../src/assets/favicon.ico"),
      filename: "index.html",
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin({
      filename: "css/[name].[hash].css",
      allChunks: true
    })
  ]
}