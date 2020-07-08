
let Promise = require("./promise")
let p = new Promise( ( resolve , reject ) => {
    setTimeout(() => {
        resolve(1111)
    }, 1000);
} )
p.then( res => {
    console.log(res);
} )