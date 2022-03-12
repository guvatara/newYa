const { merge } = require('webpack-merge');
const common = require('./webpack.config.base.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: paths.build + '/',
    compress: true,
    port: 9000,
    host: '0.0.0.0',
  },
});