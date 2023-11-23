const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 3000,
    hot: true,
  },
});
