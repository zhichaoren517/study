const process = require("process")

// get     set     has     delete
// WeakMap只有四个方法可用：get()、set()、has()、delete()。
function usageSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
}

global.gc()
console.log( usageSize() );

let arr = new Array( 10 * 1024 * 1024 ) ;
let map = new WeakMap()
map.set( arr , 1 );

global.gc()
console.log( usageSize() );

arr = null ;
global.gc()
console.log( usageSize() );
console.log(map);

