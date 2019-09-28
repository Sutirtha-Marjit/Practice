const path = require('path');
const WebPackConfig = {

    entry:'./src/index.tsx',
    output:{
        path: path.resolve(__dirname,"build"),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:"awesome-typescript-loader"`
            }
        ]
    },
    plugins:[]

};

module.exports = WebPackConfig;