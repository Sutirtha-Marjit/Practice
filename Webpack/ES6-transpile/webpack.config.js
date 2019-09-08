const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dynamicHTMLGenerator = new HtmlWebpackPlugin({
    title: 'ES6 Test Application',
    minify: true,
    
});


const webpackConfig = {
    mode:'production',
    entry: './source/js/app.es6.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'utils/bundle.min.js'
    },
    devServer:{
        compress:true,
        port:9000
    },
    plugins:[
        new CleanWebpackPlugin(),
        dynamicHTMLGenerator        
    ]
    ,
    module: {
        rules: [           
            {
                test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader', // creates style nodes from JS strings
                  },
                  {
                    loader: 'css-loader', // translates CSS into CommonJS
                  },
                  {
                    loader: 'less-loader', // compiles Less to CSS
                  },
                ]
            },
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