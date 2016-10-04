const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'firebase', 'lru-cache', 'es6-promise']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, '../../vuetify/src/index'),
          path.resolve(__dirname, '../src')
        ],
        query: {
          presets: [['es2015', { modules: false }], 'stage-2']
        }
      },
      {
        test: /\.styl$/,
        loader: ['style', 'css', 'stylus']
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: vueConfig
    })
  ]
}