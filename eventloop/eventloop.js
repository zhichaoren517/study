
console.log(Date.now(),'b');
setTimeout( ()=>{
    console.log(1);
    Promise.resolve().then( () => {
        console.log('4');
        setTimeout( ()=>{
            console.log(5);
        },1100)
    } )
} ,200)



setTimeout( ()=>{
    console.log(333);
    Promise.resolve().then( () => {
        console.log('6');
        setTimeout( ()=>{
            console.log(Date.now(),'a');
            
            console.log(7);
        },1000)
    } )
},100 )

setTimeout( ()=>{
    console.log(Date.now(),'c');
    console.log(2);
},1101 )

Promise.resolve().then( () => {
    console.log('then');
} )

Promise.resolve().then( () => {
    console.log('then');
} )

Promise.resolve().then( () => {
    console.log('then');
} )