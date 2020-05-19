// 'use strict'
/*
    对象的属性分为
        1、访问器属性 有以下描述符可操作( configurable , enumerable , get , set )
        2、数据属性 有以下描述符可操作( configurable , enumerable , writable , value )
    定义属性的方法有
        ** 定义单个属性
        1、Object.defineProperty( object , property(String) , {
            configurable:true or false
        } )
        ** 定义多个属性
        2、Object.defineProperties( object , {
            property1:{
                configurable:true or false
            },
            property2:{
                get:function(){},
                set:function(){}
            }
        } )
    读取对象属性的描述符
        Object.getOwnPropertyDescriptor( object(目标对象) , property(目标属性))  读取对象属性的描述符
*/
// let Person = {}
// let temp = "aaa"
// Object.defineProperty( Person , "name" , {
//     get:function(){
//         return temp
//     },
//     set:function(val){
//         temp = val
//     },
//     configurable:true
// } )
// console.log(Person)

// var book = {
//     _year:2020,
//     edition:1
// }
// Object.defineProperty( book , "year" , {
//     get : function(){
//         return this._year
//     },
//     set : function(newVal){
//         this._year = newVal
//     }
// } )
// book._year = 2025
// console.log(book.edition);

// Object.getOwnPropertyDescriptor( object(目标对象) , property(目标属性))  读取对象属性的描述符
var book = {}
Object.defineProperties( book , {
    _year:{
        value:2020,
        writable:true,
    },
    edition:{
        value:"renzhch",
        writable:true,
    },
    year:{
        configurable:true,
        get:function(){
            return 1996
        },
        set:function(val){
            return val
        }
    }
} )
console.log(book);
var descriptor = Object.getOwnPropertyDescriptor( book , "year" )
console.log( descriptor.set.toString() );

