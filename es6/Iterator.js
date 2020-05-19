// 扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。

// const go = function *(){
//     yield 1;
//     yield 1;
//     yield 1;
// }
// console.log([...go()]);


// Number.prototype[ Symbol.iterator ] = function*(){
//     let i = 0 ;
//     let num = this
//     while( i < num ){
//         yield i ++
//     }
// }

// console.log([...5]);//0,1,2,3,4

    
// let it = makeIterator( [ "a" , "b" , "c" , "d" ] );

// console.log(it.next());// { value: "a", done: false }
// console.log(it.next());// { value: "b", done: false }
// console.log(it.next());// { value: undefined, done: true }
// console.log(it.next());// { value: undefined, done: true }
// console.log(it.next());// { value: undefined, done: true }
// function makeIterator( array ){
//     var nextIndex = 0 ; 
//     return {
//         next:function(){
//             return nextIndex < array.length ? 
//             {  "value":array[ nextIndex++ ] }:
//             { done:true }
//             // if( nextIndex < array.length ){
//             //     let r = nextIndex ++
//             //     return {
//             //         "value":array[r],
//             //         "done":false
//             //     }
//             // }else{
//             //     return {
//             //         "value":undefined,
//             //         done:true
//             //     }
//             // }
//         }
//     }
// }



/*

    Iterator 的作用有三个：
        一是为各种数据结构，提供一个统一的、简便的访问接口；
        二是使得数据结构的成员能够按某种次序排列；
        三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

*/

// Object  Iterator
// let obj = {
//     data:[ "hello" , "world" ],
//     a:{
//         b:1
//     },
//     [ Symbol.iterator ](){
//         const _this = this;
//         let index = 0; 
//         return {
//             next(){
//                 if( index < Object.keys(_this).length ){
//                     return {
//                         value:_this[ Object.keys(_this)[index ++] ],
//                         done:false
//                     }
//                 }else{
//                     return {
//                         value:undefined,
//                         done:true
//                     }  
//                 }
//             }
//         }
//     }
// }
// // console.log( ...obj );
// // 这么看来for of 取得是iterato遍历器返回的对象的value属性值
// for (let iterator of obj) {
//     console.log(iterator,'iterator');
// }

// var obj = {
//     data:['hello','world'],
//     [Symbol.iterator]:()=>({a:1})
// }
// console.log([...obj]);



// String Iterator

// let str = new String("hello world"); // 这里不能直接 let str = "hello world";这样str之水一个字符串,不能添加属性,如果new String返回的是一个对象,可以添加属性
// console.log(...str,'...');
// str[Symbol.iterator] = function(){
//     return {
//         next:function(){
//             if( this._first ){
//                 this._first = false
//                 return {
//                     value:"sad",
//                     done:false
//                 }
//             }else{
//                 return {
//                     value:undefined,
//                     done:true
//                 }
//             }
//         },
//         _first:true
//     }
// }
// console.log(...str,'qwe');




// Iterator接口 和 Generator函数
// let myItera = {
//     [Symbol.iterator]:function*(){
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// };
// console.log([...myItera]);


// let sheItera = {
//     *[Symbol.iterator](){
//         yield 4;
//         yield 5;
//         yield 6;
//     }
// };
// console.log([...sheItera]);

let arrlike = { 0:"a",1:"b",length:10 }
console.log( Array.from( arrlike ) );