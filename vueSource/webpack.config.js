
const path = require( "path" )
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:"./src/index.js",//入口文件
    output:{
        filename:"bundle.js",
        path:path.resolve( __dirname , "dist" )
    },
    resolve:{ //默认先从source下查找第三方依赖
        modules:[
            path.resolve( __dirname , "source" ),
            path.resolve( __dirname , "node_modules" ),
        ]
    },
    devtool:"source-map",
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve( __dirname , "public/index.html" )
        })
    ]
}