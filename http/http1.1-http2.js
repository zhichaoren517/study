

/**
 * 1.1
 */

//  持久链接 keepalive 
//  并行链接 同时开多个tcp通道,秉性请求,但是一个tcp中的请求还是 one by one 形式


 /**
  * 2
  */
// 多路复用  同一个tcp可以并行请求多个http
// 头部压缩  gzip压缩 使用首部表存储要发送的header的键值对 , 服务器收到后也会照样创建一张键值对表
// 二进制分帧 
// 头部header复用
// 服务器推送,一般打开网页请求 js css html  在你请求index.html后服务器会把 css html 推送给你