let path = require("path");
let JSTTEST = /\.js?/;
let DIST_DIR = path.resolve(__dirname,"dist");
let SRC_DIR = path.resolve(__dirname,"source");

let CONFIG = {
    entry:SRC_DIR+'/app/app.js',
    output:{
        path:DIST_DIR,
        filename:'react.app.bundle.js'
    },
    module:{
       rules:[
           {
                test:JSTTEST,
                loader:'babel-loader',
                
           }
           
       ]
    }

};



module.exports = CONFIG;
