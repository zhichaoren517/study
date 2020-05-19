
let Promise = require("./constructorPromise")
let promise = new Promise( function( resolve , reject ){
    reject(233333)
} )
promise.then( res => {
    throw new Error("1212")
},err => {
    console.log("err",err)
    // return err
})
.then( res => {
    console.log("succe" , res)
} , err => console.log("fail" , err) )