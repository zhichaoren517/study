// var count = 3 ; 
// function inCount(){
//     count ++
// }
// module.exports = {
//     count:count,
//     inCount:inCount
// }



var count = 3 ; 
function inCount(){
    count ++
}
module.exports = {
    get count(){
        return count
    },
    inCount:inCount
}
function add(...val){
    console.log(...val);
    
}
add(1,2,3)