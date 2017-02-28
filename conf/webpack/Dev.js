'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    const portNum = parseInt(process.env.OPENSHIFT_NODEJS_PORT || 8080);
    const hostName = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
    console.log("%%%%%%^^^^^^ OPENSHIFT_NODEJS_IP: " + process.env.OPENSHIFT_NODEJS_IP);
    this.config = {
      devtool: 'cheap-module-source-map',
      entry: [
        'webpack-dev-server/client?http://' + hostName + ':' + portNum,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './client.js'
      ],
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ]
    };
  }
}

module.exports = WebpackDevConfig;
