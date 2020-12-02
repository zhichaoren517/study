/*
    作者：寸志
    链接：https://www.zhihu.com/question/34210214/answer/93590294
    来源：知乎
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

    JavaScript 闭包的本质源自两点，词法作用域和函数当作值传递。词法作用域，就是，按照代码书写时的样子，
        内部函数可以访问函数外面的变量。引擎通过数据结构和算法表示一个函数，使得在代码解释执行时按照词法作用域的规则 
        可以访问外围的变量，这些变量就登记在相应的数据结构中。

    函数当作值传递，即所谓的first class对象。就是可以把函数当作一个值来赋值，当作参数传给别的函数，
        也可以把函数当作一个值 return。一个函数被当作值返回时，也就相当于返回了一个通道，这个通道可以访问这个函数词法作用域中的变量，
        即函数所需要的数据结构保存了下来，数据结构中的值在外层函数执行时创建，外层函数执行完毕时理因销毁，但由于内部函数作为值返回出去，这些值得以保存下来。
        而且无法直接访问，必须通过返回的函数。这也就是私有性。

    本来执行过程和词法作用域是封闭, 这种返回的函数就好比是一个虫洞，开了挂。也就是 @秋月凉 答案中轮子哥那句话的意思。显然，闭包的形成很简单，
        在执行过程完毕后，返回函数，或者将函数得以保留下来，即形成闭包。实际上在 JavaScript 代码中闭包不要太常见。函数作为第一等对象之后 JavaScript 灵活得不要不要的。
*/





// function fn(){
//     var name = "renzhch"
//     var logName = function(){
//         console.log(name)
//         return logName
//     }
//     return logName
// }
// var tn = fn()
// console.log(tn()()()()()()());


// function outerFn(){
//     var i = 0 ;
//     function innerFn(){
//         i ++;
//         console.log( i )
//     }
//     return innerFn
// }
// var inner = outerFn()
// inner()
// inner()
// inner()
// inner()
// var inner1 = outerFn()
// inner1()
// inner1()
// inner1()
// inner1()


// var i = 0 ;
// function outerFn(){
//     function innerFn(){
//         i ++ ;
//         console.log(i)
//     }
//     return innerFn
// }
// var inner1 = outerFn()
// var inner2 = outerFn()
// inner1()
// inner2()
// inner1()
// inner2()
/*

    传统的函数是没有状态的,他们的状态是保存在函数调用栈(stack)上面的,随着函数的调用,结束,退出,这些栈上的值也就被清空了,
    所以说普通函数是没有状态,没有记忆的,例如下面的函数不管执行多少次,返回的都是1

*/
// var inc = function(){
//     var count = 0;
//     return ++ count
// }
// console.log( inc() );
// console.log( inc() );

// 闭包
// var obj = {
//     count : 0 , 
//     add : function(){
//         return ++ this.count
//     }
// }
// function add(){
//     var count = 0 ;
//     return function(){
//         return ++ count
//     }
// }
// var _add = add()
// console.log( _add() );
// console.log( _add() );





function fun(n,o) {
    console.log(o)
    return {
        fun:function(m){
            debugger
            return fun(m,n);    
        }
    };
}
// var a = fun(0); 
// a.fun(1); 
// a.fun(2); 
// a.fun(3);
//undefined,?,?,?
// var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1); 
c.fun(2); 
c.fun(3);//undefined,?,?,?

