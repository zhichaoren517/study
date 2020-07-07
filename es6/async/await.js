
/*

    1、第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
    2、第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。Promise.all()
    3、第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。

**/



// function timerOut( ms ){
//     return new Promise( ( resolve , reject ) => {
//         setTimeout( resolve , ms )
//     } )
// }
// async function asyncPrint(){
//     await timerOut( 2000 );
//     console.log( 'hello world' )
// }
// asyncPrint()

// async function f(){
//     throw new Error('出错了')
// }
// f().then( res => {
//     console.log(res,'res')
// } ).catch( err => {
//     console.log(err,'err');
// } )

// class Sleep{
//     constructor( timer ){
//         this.timer = timer 
//     }
//     then( resolve , reject ){
//         const startTime = Date.now();
//         setTimeout(
//             () => resolve(Date.now() - startTime), 
//         this.timer);
//     }
// }
// (async () => {
//     let leeptime = await new Sleep(2000)
//     console.log(leeptime,'leeptime');
// })()

// function sleep( ms ){
//     return new Promise( ( resolve  ) => {
//         setTimeout(()=>{
//             resolve()
//         }, ms);
//     } )
// }
// async function one2FiveInAsync(){
//     for (let i = 0; i < 5; i++) {
//         await sleep(1000);
//         console.log(i);
//     }
// }
// one2FiveInAsync()

async function f(){
    let res = await Promise.resolve('duiduiuduiu');
    await Promise.reject('cuocuocuo');
    return res
    // await Promise.resolve('duiduidi');
}
f().then(res => {
    console.log(res,'res');
}).catch( err => {
    console.log(err,'err');
    
} )
