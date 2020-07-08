let http = require('http')
// get只能发送get请求不能发送请求体 ,request可以发送其他请求,可以增加请求体
let client = http.request({
    hostname:"localhost",
    port:3000,
    method:"post",
    headers:{
        a:1,
        "Content-Type":"text/plain"
        // 纯文本 text/plain
        // json application/json
        //表单格式  urlencoded/x-www-form-urlencoded
    }
},(res)=>{
    let arr = []
    res.on('data',(data)=>{
        arr.push(data)
    })
    res.on( 'end' , () => {
       console.log( Buffer.concat( arr ).toString());
       
    } )
}) 
client.end("hello")


// fetch 和ajax的区别  支持promise写法,可以在子线程中使用 底层自己封装ajax可能会用到  跨域需要配置  