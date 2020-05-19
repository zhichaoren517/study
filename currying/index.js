/*  
    参考:https://www.jianshu.com/p/2975c25e4d71

    函数柯里化:
        好处 : 1. 参数复用
              2. 提前确认
              3. 延迟运行
*/

// 1. 参数复用

/*
        function add(x,y){
            return x + y
        }
        console.log(add(1,2));

        // 柯里化后
        function curryAdd(x){
            return function(y){
                return x + y
            }
        }

        console.log( curryAdd(1)(2) );
*/


/*

        function check( reg , text ){
            return reg.test(text)
        }

        console.log(check(/\d+/g, 'test')); //false
        console.log(check(/[a-z]+/g, 'test'));//true
        // 柯里化后
        function curryCheck( reg ){
            return function( text ){
                return reg.test(text)
            }
        }

        var hasNumber = curryCheck( /\d+/g )
        var hasLetter = curryCheck( /[a-z]+/g )

        console.log( hasNumber("test") );
        console.log( hasLetter("test") );

*/

// 3. 延迟运行

/*
        var name = "jack";
        var obj = {
            name:"rose",
            getName:function(){
                return this.name
            }
        }

        Function.prototype.bind = function( context ){
            
            var _this = this;
            var arg = Array.prototype.slice.call( arguments );
            return function(){
                return _this.apply( context , arg )
            }
        }

        var aaa = obj.getName
        console.log( aaa.bind( obj )() );
        
        */
       
    // 实现一个add方法，使计算结果能够满足如下预期：

/*
    add(1)(2)(3) = 6;
    add(1, 2, 3)(4) = 10;
    add(1)(2)(3)(4)(5) = 15
    function add() {
        // 第一次执行时，定义一个数组专门用来存储所有的参数
        var _args = Array.prototype.slice.call(arguments);

        // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
        var _adder = function() {
            _args.push(...arguments);
            return _adder;
        };

        // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        return _adder;
    }
*/

// var add = function(){
//     var arg = [].slice.call( arguments )
//     return function(){
//         // console.log(arguments);
//         console.log(arg);
        
//         if( !arguments.length ){
//             //如果没有在传入参数就进行累加
//             return arg.reduce( ( a , b ) => a + b )
//         }else{          
//             //否则继续调用这个方法,并把参数push进去
//             [].slice.call(arguments).forEach(i => {
//                 arg.push(i)
//             });
//             // console.log(arg);
            
//             return arguments.callee
//         }
//     }
// }
// console.log(add(1)(2)(3)(4)(5)(6,7)());

// 封装一个柯里化函数

function curry( fn , length ){
    //fn.length指的是fn的参数的length
    var length = length || fn.length
    return function(){
        if( arguments.length >= length ){
            // 如果参数长度大于等于length,不需要再接收参数,执行fn函数
            return fn.apply(this, arguments )
        }else{
            //否则继续执行curry 这里参数的收集是跟bind的实现有关系,也是利用闭包,大家可以看下bind的实现
            return curry( fn.bind( this , ...arguments ) , length - arguments.length )
        }
    }
}

// var add = curry( function ( a , b , c , d ){
//     console.log(arguments,"add");
    
//     return a + b + c + d
// } )

// console.log( add(1,2)(3)(4) );

// var curry = (fn) => {
//     return judge = () => {
//         debugger
//         let arg = [].slice.call(arguments)
//         if( arg.length === fn.length ){//这里arg.length成 5  了  咋回事????????
//             return fn( ...arg )
//         }else{
//             return function(){
//                 return judge( ...arg , ...arguments )
//             }
//         }
//         // return arguments.length === fn.length ?  fn( ...arguments ) : ( arg ) => judge( ...arguments , arg )
//     }
// }
// var add = curry( function (){
//     var arg = Array.prototype.slice.call( arguments )
//     return arg.reduce( ( a , b ) => a + b );
// } )


// function add(){
//     //arguments 是一个伪数组,利用Array.prototype.slice.call将它转成一个真正的数组
//     var arg = Array.prototype.slice.call( arguments )
//     return function(){
//         if( !this.arguments.length ){
//             // 参数为0,进行累加并且返回
//             return arg.reduce( ( a , b ) => a + b )
//         }else{
//             // 接收参数,不满足执行条件,继续保存参数,并且返回当前函数
//             var _arg = Array.prototype.slice.call( arguments )
//             _arg.forEach( i => {
//                 arg.push( i )
//             } )
//             // arguments的主要用途是保存函数参数,有一个callee属性,返回正被执行的 Function 对象
//             //已经不推荐使用arguments.callee()；访问 arguments 是个很昂贵的操作，因为它是个很大的对象，每次递归调用时都需要重新创建。影响现代浏览器的性能，还会影响闭包。
//             //解决办法(给内部函数一个名字即可)
//             return arguments.call
//         }
        
//     }
// }



// var curry = fn => {
//     console.log(fn.toString());
    
//     return judge = (...arg) => {
//         if( arg.length >= fn.length){
//             return fn(...arg)
//         }else{
//             return (_arg)=>{
//                 return judge( ...arg , _arg )
//                 // return judge.bind(this, arg.concat(_arg) )
//             }
//         }
//     }
// }
var curry = fn => 
         anonyMousFn = ( ...arg ) => 
            arg.length >= fn.length ? fn(...arg) : ( _arg ) => anonyMousFn( ...arg , _arg )




// var double = curry( function(e,f,g){
//     return [ e , f , g ]
// } )
var add = curry( function(a,b,c){
    return a + b + c
} )
// var a = curry( function(e,f,g){
//     return [ e , f , g ]
// } )('a','b')('c')
// var b = curry( function(a,b,c){
//     return a + b + c
// } )(1,2)(3)

// console.log(double());
console.log(add(1)(2,3));
