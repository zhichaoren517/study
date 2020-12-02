// 去重
var arr = [  1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,4,5,6,71,2,3,4,5,6  ]

/**
 * es6 set
 */

 function unique(arr){
    return Array.from( new Set( arr ) )
 }


/**
 * for 循环潜嵌套
 */
// function unique(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if( arr[i] == arr[j] ){
//                 arr.splice( j,1 )
//                 j--
//             }
//         }
        
//     }
//     return arr
// }


// 利用indexof
// function unique( arr ){
//     var result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if( result.indexOf(arr[i])<0 ){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

/**
 * includes
 */
// function unique(arr){
//     var result = []
//     for (let i = 0; i < arr.length; i++) {
//         if( !result.includes(arr[i]) ){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

/**
 * reduce
 */

// function unique(arr){
//     return arr.reduce( ( pre,cur,index )=>{
//         return pre.includes(cur)?pre : [ ...pre , cur ]
//     },[] )
// }






console.time('time');
console.log(unique(arr));
console.timeEnd('time');