var a = 100 ; 
var obj = {
    a:1,
    fn:()=>{
        setTimeout(() => {
            console.log(this.a);
        });
    }
}
obj.fn()


// let obj = {
//     name:"jack",
//     des:{
//         age:1,
//         like:{
//             sport:"ball",
//             eat:"fruit"
//         },

//     }
// }