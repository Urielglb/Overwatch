const common = require('./webpack.common');

const merge = require('webpack-merge');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common,{
    plugins :[new MiniCSSExtractPlugin({filename:'css/[name].[contenthash].css'})],
    module:{
        rules:[
          {
              test: /\.css$/,
              loader : [MiniCSSExtractPlugin.loader,'css-loader']
          },
          {
            test: /\.scss$/,
            loader : [MiniCSSExtractPlugin.loader,'css-loader','sass-loader']
          },{
              test : /\.html$/,
              use : {
                  loader : 'html-loader',
                  options : {
                      minimize : true,
                      attrs : false
                  }
              }
          }
        ]
    },
});
