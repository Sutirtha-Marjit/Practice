let path =  require('path');
const ETP = require('extract-text-webpack-plugin');

let etp = new ETP({
    filename:'bundle.css'
});

let CONFIG = {

    entry:['./src/app/common.test.js'],
    output:{
        path:path.resolve(__dirname,'output_dist'),
        filename:'[name].js',
        
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:ETP.extract({
                    fallback:'style-loader',
                    use:'css-loader!less-loader'
                })
                
                
            }
        ]
    },
    plugins:[
        etp
    ]

};

module.exports = CONFIG;