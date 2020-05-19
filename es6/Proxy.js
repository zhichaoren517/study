
// Proxy.get方法

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var person = {
//     name:"jack",
//     age:12
// }
// var proxy = new Proxy(person,{
//     get:function(target,propKey,receives){
//         return receives
//         if( propKey in target ){
//             return target[ propKey ]
//         }else{
//             throw new Error( "prop name \"" + propKey+  "\" does not exist." )
//         }
//     }
// })
// console.log(proxy.get == proxy);//true




//  数组的负索引

// function createArr(){
//     let handler = {
//         get( target , propKey , receivers ){
//             let index = Number( propKey );
//             let pK = null;
//             if( index < 0 ){
//                 pK = String( target.length + index )
//             }
//             return Reflect.get( target , pK , receivers )
//         }
//     }

//     let target = arguments
//     return new Proxy( target , handler )

// }
// let arr = createArr(2,3,4)
// console.log(arr[-2]);

// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;

// function pipe(value){

//     funcStack = [] ;
//     var oproxy = new Proxy( {} , {
//         get( target , fnName ){
//             if( fnName == "get" ){
//                 return funcStack.reduce( ( val , cur ) => {
//                     return cur(val)
//                 },value )
//             }
//             funcStack.push( window[ fnName ] )
//             return oproxy
//         }
//     } )

//     return oproxy
// }
// console.log(pipe().double.pow.reverseInt.get);


// 实现一个生成各种 DOM 节点的通用函数dom。

// var dom = new Proxy({} , {
//     get( target , property ){
//         return  function( attrs = {} , ...children ){
//             const el = document.createElement( property )
//             for( let prop of Object.keys( attrs ) ){
//                 el.setAttribute( prop , attrs[prop] )
//             }
//             for( let child of children ){
//                 if( typeof child === "string" ){
//                     child = document.createTextNode( child )
//                 }
//                 el.appendChild( child )
//             }
//             return el
//         }
//     }
// })
// const el = dom.div({},
//     'Hello, my name is ',
//     dom.a({href: '//example.com'}, 'Mark'),
//     '. I like:',
//     dom.ul({},
//       dom.li({}, 'The web'),
//       dom.li({}, 'Food'),
//       dom.li({}, '…actually that\'s it')
//     )
//   );
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                                    //
// Proxy.set方法                                                                                                                     //
                                                                                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
    let person = new Proxy({} , {
        set( obj , prop , val ){
            if( prop === "age" ){
                if( !Number.isInteger( val ) ){
                    throw new TypeError('The age is not an integer');
                }
                if( val > 150 ){
                    throw new RangeError('The age seems invalid');
                }
            }
            obj[ prop ] = val
        }
    })
    person.age = "12"
    console.log(person);
*/

// 防止内私有属性被改写

// let handler = {
//      get( target , prop ){
//         invariant(target,prop)
//      },
//      set( target , prop , val ){
//         invariant(target,prop)
//         target[prop] = val
//      }
// }
// let invariant = function(target , key , action ){
//     console.log(target,'t');
//     console.log(key,'k');
//     console.log(target.hasOwnProperty(key));
    
//     if( !target.hasOwnProperty(key) ){
//         throw new Error( `未声明属性` )
//     }

//     if( key[0] == "_" ){
//         throw new Error( `私有属性"${ key }",禁止修改` )
//     }
// }
// const target = {
//     age:12,
//     _age:18,
//     _name:"jack"
// }
// const person = new Proxy( target , handler )
// person._name = "jkj"


// 'use strict'
// const handler = {
//      set( target , prop , value , receives ){
//         target[prop] = receives
//         // return true  //严格模式下set方法必须返回 true否则报错
//      }
// }
// const proxy = new Proxy( {} , handler )
// const myobj = {}
// Object.setPrototypeOf( myobj , proxy )
// myobj.age = 12
// console.log(myobj.age == myobj);

// const handler = {
//     apply(  target , ctx , arg ){
//         return Reflect.apply(...arguments) * 2
//     }
// }
// let target = function( num1, num2 ){
//     return num1 + num2
// }
// var p = new Proxy( target , handler )
// p(1,2)
// console.log(p.call(null,4,2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                                    //
// Proxy.has

// has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。

// has方法可以接受两个参数，分别是目标对象、需查询的属性名。                                                                                                                     //
                                                                                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const handler = {
//     has( target , prop ){
//         console.log(prop,'has');
//         if( prop[0] == "_" ){
//             return false
//         }
//         return prop in target
//     }
// }
// const target = {
//     _name:"jack",
//     name:"jack"
// }
// const person = new Proxy( target , handler )
// console.log("_name" in person);
// console.log(person);

  