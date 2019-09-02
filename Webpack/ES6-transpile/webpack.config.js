const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    entry: './source/js/app.es6.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'utils/bundle.min.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'ES6 Test Application',
            minify:true
        })
    ]
    ,
    module: {
        rules: [
            {
                test: /\.es6.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
                
            }
        ]
    },
    devtool: 'source-map'
};

module.exports = webpackConfig;