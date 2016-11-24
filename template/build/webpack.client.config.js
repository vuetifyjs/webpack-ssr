const base = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const vueConfig = require('./vue-loader.config')
const webpack = require('webpack')

const config = Object.assign({}, base, {
  plugins: (base.plugins || []).concat([
    // strip comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // generate output HTML
    new HTMLPlugin({
      template: 'src/index.template.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ])
})

if (process.env.NODE_ENV !== 'production') {
  config.entry.critical = './src/critical.js'

  module.exports = config
}

// Use ExtractTextPlugin to extract CSS into a single file
// so it's applied on initial render

// vueConfig is already included in the config via LoaderOptionsPlugin
// here we overwrite the loader config for <style lang="stylus">
// so they are extracted.
vueConfig.loaders = {
  stylus: ExtractTextPlugin.extract({
    loader: "css-loader!stylus-loader",
    fallbackLoader: "vue-style-loader" // <- this is a dep of vue-loader
  })
}

config.plugins.push(
  new ExtractTextPlugin('styles.[hash].css'),
  // this is needed in webpack 2 for minifying CSS
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  // minify JS
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
)

module.exports = config