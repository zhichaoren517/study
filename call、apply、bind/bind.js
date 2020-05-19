// call( context , arg1 , arg2 )
// apply( context , [ arg1 , arg2 ] )
// Array.prototype.slice.call( arguments )//将伪数组转化为真正数组
// 伪数组::
    // Javascript中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 getElementsByTagName , document.childNodes 之类的，它们返回NodeList对象都属于伪数组。不能应用 Array下的 push , pop 等方法。
    // 但是我们能通过 Array.prototype.slice.call 转换为真正的数组的带有 length 属性的对象，这样 domNodes 就可以应用 Array 下的所有方法了


// function getColor(){}
// getColor.prototype = {
//     color:"red",
//     sayColor:function(){
//         console.log( "my color is " + this.color )
//     }
// }
// var apple = new getColor()
// banana = {
//     color:"yellow"
// }
// apple.sayColor.call( banana )
// apple.sayColor.apply( banana )

// var arr1 = [ 1 , 2 , 3 , 4 ]
// var arr2 = [ "a" , "b" , "c" , "d" ]
// arr1.push(...arr2)
// console.log(arr1);


// Array.prototype.push.apply( arr1 , [ 5 , 6 , 7 ] )
// console.log( Object.prototype.toString.call(arr1) );


// function log(){
//     console.log(JSON.stringify(arguments))
//     var arg =  Array.prototype.slice.call( arguments )
//     arg.push( "push" )
    
//     console.log( Array.prototype.slice.call( arguments ) )
//     console.log.apply( console , arg )
// }
// log( 1 , 2 )

// var name = "renzhch";
// var obj = {
//     name:"jack",
//     getName:function(){
//         console.log(this.name);
//     }
// }
// // obj.getName.call(this)
// function add(){
//     let aaa = [...arguments]
//     return aaa.reduce( ( a ,b ) => a+ b )
// }


// console.log( add.bind(obj,1).bind(obj,5,3)());

Function.prototype.my_bind = function( context ) {
    var self = this; // 保存原函数
    var args = Array.prototype.slice.call(arguments); // 剩余的参数转为数组
    return function() { // 返回一个新函数
      self.apply(context, Array.prototype.concat.call(args, Array.prototype.slice.call(arguments)));
    }
  }
  var obj = {
    name : "jack"
  }
  var obj1 = {
      name:"rose"
  }
  function getName(){
      return this.name
  }
  getName.my_bind(obj)()
console.log( getName.my_bind(obj)() );

