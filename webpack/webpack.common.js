const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
    template : './assets/index.template.html',
    filename: 'index.html'
});

module.exports = {
    entry : './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.resolve(path.join(__dirname,'..'),'dist'),
        filename: 'javascirpt/bundle.js',
    }, 
    plugins: [htmlWebpack],
    module:{
        rules: [
            {
                test:/\.jpg$/,
                loader:'url-loader'
            }
        ]
    }
}