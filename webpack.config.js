const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },

  cache: true,
  devtool: 'eval',
  watchOptions: {
    poll: 250
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.html$/, loader: "html" },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }      
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CopyWebpackPlugin(
      [
        { from: './src/root' }
      ],
      {
        copyUnmodified: true
      })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  }
}
