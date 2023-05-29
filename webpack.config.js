const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/_redirects", to: "./" },
        { from: "./public/favicon.ico", to: "./" },
        { from: "./public/robots.txt", to: "./" },
      ],
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}