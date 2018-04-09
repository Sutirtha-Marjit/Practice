let path =  require('path');
let CONFIG = {

    entry:['./src/app/common.test.js','./src/app/accurate.test.js'],
    output:{
        path:path.resolve(__dirname,'output_dist'),
        filename:'[name].js'
    }

};

module.exports = CONFIG;