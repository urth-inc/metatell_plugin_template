const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    port: 3004,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
});
