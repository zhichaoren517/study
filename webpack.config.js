
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",//开发模式,可以看到压缩前的代码
    // 入口
    entry:{
        age:"./age.js",
        name:"./name.js"
    },//从当前入口开始打包
    // 出口
    output:{
        filename:"[name].js",
        // 出口的路径必须是一个绝对路径
        path:path.resolve(__dirname , 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"age.html",
            template:path.resolve(__dirname , 'public/index.html'),//"./public/index.html" 以public下的html作为模块
            minify:{
                removeAttributeQuotes:true,//去双引号
                collapseWhitespace:true,//去空行
            },
            chunks:['age'],//要是用哪些代码块 , html只引入chunks里面的js文件
        }),
        new HtmlWebpackPlugin({
            filename:"name.html",
            template:path.resolve(__dirname , 'public/index.html'),//"./public/index.html" 以public下的html作为模块
            minify:{
                removeAttributeQuotes:true,//去双引号
                collapseWhitespace:true,//去空行
            },
            chunks:['name']
        }),
    ],
    devServer:{
        port:3030,
        contentBase:"./dist",//指定webpack-dev-server服务的路径
        compress:true,//gzip压缩,见小体积
        progress:true,//进度条
    }



}

//webpack可以实现本地的开发服务