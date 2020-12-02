// const process = require("process")

// has  delete  get     set     clear       size    
// function usageSize() {
//     const used = process.memoryUsage().heapUsed;
//     return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
// }

// global.gc()
// console.log( usageSize() );

// let arr = new Array( 10 * 1024 * 1024 )
// const map = new Map()
// map.set( arr , 1 )

// global.gc()
// console.log( usageSize() );

// arr = null 
// global.gc();
// console.log( usageSize() );
// console.log(map);




let map = new Map([
    [ "name",12,333 ],
    [ "age",18 ],
])
console.log(map);
