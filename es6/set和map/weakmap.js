const process = require("process")

// get     set     has     delete
// WeakMap只有四个方法可用：get()、set()、has()、delete()。
function usageSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
}

// global.gc()
// console.log( usageSize() );

// let arr = new Array( 10 * 1024 * 1024 ) ;
// let map = new WeakMap()
// map.set( arr , 1 );

// global.gc()
// console.log( usageSize() );
// console.log(global);
// arr = null ;
// global.gc()
// console.log( usageSize() );

// let arr = new Array( 10 * 1024 * 1024 ) ;
// let brr = new Array( 10 * 1024 * 1024 ) ;
// let map = new WeakMap()
let map = {
    a:{
        b:new Array( 10 * 1024 * 1024 ) 
    }
}

// map.set({1:1},arr)
// map.set({2:2},brr)

global.gc()
console.log( usageSize() );

delete map.a
map.a = null

global.gc()
console.log( usageSize() );


/**
 * 一个普通的对象obj  里面有一个属性,值如果还是一个对象的话,那么就说 , obj对arr是强引用.正常情况下 如果要销毁obj  我们会这样做 obj = null
 * 但由于obj对arr是强引用,这时候arr obj的内存并不会呗回收.所以我们要先 将obj指向arr的指针销毁,delete obj.a 然后再 obj=null 这样才会被销毁
 * 还有一种方法 就是var obj = new WeakMap()
 * obj.set(arr,1)
 * 如果需要销毁的时候  我们直接arr=null赋值就好了.
 * WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
 */ 

let brr = new Array( 10 * 1024 * 1024 ) ;
// obj:{
//     a:arr
// }

