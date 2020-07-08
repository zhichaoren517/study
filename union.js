let a = [1, 2, 3,4,5,6],
b = [2, 4, 5,6,7,3];
// 交集
// function intersection(a,b){
//     return a.filter( i => { return b.includes(i) } )
// }
// //并集
// function union(a,b){
//     return a.concat( b.filter( i => { return !a.includes(i) } ) )
// }
// //差集
// function difference(){
//     return a.concat(b).filter( i => {
//         return !a.includes(i) || !b.includes(i)
//     } )
// }
// console.log(difference(a,b));

let setA = new Set(a)
let setB = new Set(b)
// es6
//并集
let union = ( a , b ) => {
    return Array.from( new Set( [...a , ...b] ) )
}
//交集
let intersection = (a,b) => {
    return Array.from( new Set( a.filter( i => {
        return setB.has(i)
    } ) ) )
}

//差集
let diff = (a,b) => {
    return Array.from( new Set( ([ ...a , ...b ]).filter( i => {
        return !setA.has( i ) || !setB.has( i )
    } ) ) )
}


console.log(diff(a,b));




