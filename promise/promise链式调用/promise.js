
let fs = require("fs")
let path = require("path")
let Promise = require("../promise实现/constructorPromise1")
// fs.readFile( path.resolve( __dirname , "./name.text" ) , "utf8" , function(err , data){
//     console.log( data)
// } )

// function read( url ){
//     return new Promise( function(resolve , reject ){
//         fs.readFile( path.resolve( __dirname , url ) , "utf8" , function(err , data){
//             if( err )reject(err);
//             resolve(data)
//         } )
//     } )
// }
//     read("../age.text")
//         .then( res => {
//             return 1000
//         },err => {
//             return err
//         })
//         .then( res => {
//             console.log('res',res)
//         } )



let p1 = new Promise( ( resolve , reject ) => {
        resolve(100)
} )
let p2 = p1.then( res => {
    console.log("p1" , res)
    return {}
} )
p2.then( res => {
    console.log("p2" , res)
},err => console.log("err" , err))

