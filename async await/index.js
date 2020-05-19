var p = new Promise((resolve, reject) => {
    resolve(1)
} )
p.then( res => {
    setTimeout(() => {
        console.log(3000);
    }, 3000);
} )
.then( res => {
    setTimeout(() => {
        console.log(1000);
    }, 1000);
} )