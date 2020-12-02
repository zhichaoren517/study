
/**
 * 
 * ）fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
    2）fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
    3）fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
    4）fetch没有办法原生监测请求的进度，而XHR可以

    fetch 有两个参数
    fetch( url , {
        methods:"post",
        body:"要发送的数据data",
        headers:new Headers({})
    } )
 */










 