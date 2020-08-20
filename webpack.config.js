const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // output: {
  //   path: __dirname + "/dist",
  //   filename: "bundle.js",
  // },
  
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack starter project",
      template: path.resolve("./src/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
     
      // For SASS/SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },

      // For Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};