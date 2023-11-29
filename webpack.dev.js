const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
const Dotenv = require('dotenv-webpack');

module.exports = (env) =>
  merge(config, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
      allowedHosts: 'all',
    },
    output: { publicPath: '/' },

    plugins: [
      new Dotenv({
        path: `./.env.${env.mode}`,
      }),
    ],
  });
