const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
    template : './assets/index.template.html',
    filename: 'index.html'
});

module.exports = {
    entry : './src/javascript/entry.js',
    output: {
        path: path.resolve(path.join(__dirname,'..'),'dist'),
        filename: 'javascirpt/bundle.js',
    }, 
    plugins: [htmlWebpack],
    module:{
        rules: [
            {
                test : /\.(png|svg|jpg|gif)$/,
                use : [
                    'file-loader'
                ]
            }
        ]
    }
}