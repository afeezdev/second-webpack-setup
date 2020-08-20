const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require("path");
 
module.exports = {
  mode: "production",
  entry: ["./src/index.js"],

  plugins:[
        new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Email Cleaner starter project",
      template: path.resolve("./src/index.html"),
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./images",
              name: "[name].[ext]"
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        },
      }
    ],
  },
};