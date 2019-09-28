const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const dynamicHTMLGenerator = new HtmlWebpackPlugin({
    title: 'React App',
    minify: true,
    favicon:'./src/assets/icons/fav.icon.png',
    template:'./src/index.html'
    
});
const dynamicAssetsGenerator = new HtmlWebpackTagsPlugin({
    tags:[
    'https://cdnjs.cloudflare.com/ajax/libs/react/16.9.0/umd/react.production.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.9.0/umd/react-dom.production.min.js'
    ],
    append:true,
    
});




const webpackConfig = {
    entry: './src/main.ts',
    devtool: 'source-map',
    mode: 'production',
    resolve:{
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer:{
        compress:true,
        port:9000
    },
    output:{
        path:path.resolve(__dirname,'build'),        
        filename:'bundle/bundle.js',
        
    },
    plugins:[
        new CleanWebpackPlugin(),
        new CheckerPlugin(),
        dynamicHTMLGenerator     ,
        //dynamicAssetsGenerator   
    ],
    module:{
        rules:[
           
            {
                test: /\.react.production.min.js$/i,
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
           
            {
                test:/\.ts(x)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'awesome-typescript-loader'
                    }
                ]
            },
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'awesome-typescript-loader'
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