const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new HtmlWebpackPlugin(({  // Also generate a test.html
      filename: 'index.html',
      template: 'index.html'
    })),
  ]
};
