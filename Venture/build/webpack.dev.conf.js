var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: [
      utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    ]
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons', 
      chunks: ['index','news','bases','projects','games','classes']
    }),
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //生成的html存放路径
      template: './src/pages/index.html', //html模板路径
      inject: true,
      hash: true,
      chunks: ['commons','index'],
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/pages/news.html',
      inject: true,
      hash: true,
      chunks: ['commons','news'],
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'bases.html',
      template: './src/pages/bases.html',
      inject: true,
      hash: true,
      chunks: ['commons','bases'],
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'projects.html',
      template: './src/pages/projects.html',
      inject: true,
      hash: true,
      chunks: ['commons','projects'],
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'games.html',
      template: './src/pages/games.html',
      inject: true,
      hash: true,
      chunks: ['commons','games'],
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'classes.html',
      template: './src/pages/classes.html',
      inject: true,
      hash: true,
      chunks: ['commons','classes'],
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      template: './src/pages/signup.html',
      inject: true,
      hash: true,
      chunks: ['signup'],
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    })
  ]
})
