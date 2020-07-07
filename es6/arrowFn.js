// 箭头函数和普通函数的区别
// this捕获其所在上下文的this
// 没有arguments形参
// 箭头函数都是匿名函数
// 箭头函数不能是构造函数
//箭头函数没有原型属性
//箭头函数不能当作generator函数
//箭头函数只想不能被改变







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