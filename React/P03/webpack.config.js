const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dynamicHTMLGenerator = new HtmlWebpackPlugin({
    title: 'React App',
    minify: true,
    
});



const webpackConfig = {
    entry: './src/app.ts',
    devtool: 'source-map',
    mode: 'production',
    resolve:{
        extensions: [".ts", ".tsx"]
    },
    devServer:{
        compress:true,
        port:9000
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle/bundle.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        dynamicHTMLGenerator        
    ],
    module:{
        rules:[
           /*
            {
                test: /\.html$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
           */
            {
                test:/\.ts(x)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'ts-loader'
                    }
                ]
            },
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'ts-loader'
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

        ]
    },
    externals:{
        "react":"React",
        "react-dom":"ReactDOM"
    }
};

module.exports = webpackConfig;