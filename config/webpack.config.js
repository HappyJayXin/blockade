'use strict';

const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    popup: PATHS.src + '/popup.js',
    setting: PATHS.src + '/setting.js',
    contentScript: PATHS.src + '/static/js/contentScript.js',
    background: PATHS.src + '/static/js/background.js',
  },
});

module.exports = config;
