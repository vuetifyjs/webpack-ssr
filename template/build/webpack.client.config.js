const base = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
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
      template: 'src/index.template.html',
      inject: process.env.NODE_ENV !== 'production' ? 'body' : false,
      minify: {
        collapseWhitespace: true
      },
      environment: process.env.NODE_ENV
    }),
    new ExtractTextPlugin('styles.[hash].css')
  ])
})

if (process.env.NODE_ENV !== 'production') {
  return module.exports = config
}

// Use ExtractTextPlugin to extract CSS into a single file
// so it's applied on initial render

// vueConfig is already included in the config via LoaderOptionsPlugin
// here we overwrite the loader config for <style lang="stylus">
// so they are extracted.
vueConfig.loaders = {
  stylus: ExtractTextPlugin.extract({
    loader: "css-loader!stylus-loader!sass-loader",
    fallbackLoader: "vue-style-loader" // <- this is a dep of vue-loader
  })
}

module.exports = config