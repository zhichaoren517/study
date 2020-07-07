// function after(times , callback){
//     let total = 0 ; 
//     return function(sum){
//         debugger
//         total += sum
//         if( --times == 0 ){
//             debugger
//             callback(total)
//         }
//     }
// }
// let fn = after( 3, function( total ){
//     console.log(total+'开始咯');
// } )
// fn(3)
// fn(2)
// fn(2)

function after( times , cb ){
    // let total = 0 ; 
    return function(){
        if( --times == 0 ){
            cb()
        }
    }
}
let fn = after( 3 , function(total){
    console.log('hihihi');
} )
fn()
fn()
fn()