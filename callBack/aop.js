

// AOP 面向切片编程 , 把原来的代码切成片,在中间加上自己的代码
function say(who){
    console.log(who + " say");
}
function speak(){
    console.log("speak");
    
}
// 装饰器,扩展原来的方法
Function.prototype.before = function(fn){
    var _this = this
    return function(){
        _this(...arguments)
        fn && fn()
    }
}
let fn = say.before( function(){
    console.log('快不中了'); 
} )
fn("jack")