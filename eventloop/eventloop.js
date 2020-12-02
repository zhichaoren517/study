
// console.log(Date.now(),'b');
// setTimeout( ()=>{
//     console.log(1);
//     Promise.resolve().then( () => {
//         console.log('4');
//         setTimeout( ()=>{
//             console.log(5);
//         },1100)
//     } )
// } ,200)



// setTimeout( ()=>{
//     console.log(333);
//     Promise.resolve().then( () => {
//         console.log('6');
//         setTimeout( ()=>{
//             console.log(Date.now(),'a');
            
//             console.log(7);
//         },1000)
//     } )
// },100 )

// setTimeout( ()=>{
//     console.log(Date.now(),'c');
//     console.log(2);
// },1101 )

// Promise.resolve().then( () => {
//     console.log('then1');
// } )

// Promise.resolve().then( () => {
//     console.log('then2');
// } )

// Promise.resolve().then( () => {
//     console.log('then3');
// } )

// // b   then1 2 3  333 1 6 4 7 5

console.log('script start');

setTimeout(() => {
  console.log('北歌');
}, 1 * 2000);

Promise.resolve()
.then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});


async function foo() {
  await bar()
  console.log('async1 end')
}
foo()

async function errorFunc () {
  try {
    await Promise.reject('error!!!')
  } catch(e) {
    console.log(e)
  }
  console.log('async1');
  return Promise.resolve('async1 success')
}
errorFunc().then(res => console.log(res))

function bar() {
  console.log('async2 end') 
}

console.log('script end');

/**
 * script start
 * async2 end
 * script end
 * promise1
 * async1 end
 * error!!!
 * async1
 * promise2
 * async1 success
 * 
 */


 /**
  * 浏览器的机制就是先执行栈中的微任务 和宏任务 的回调会分开存放,栈中执行完毕会执行所有的微任务,取出在队列中的第一个宏任务,执行完后会晴空微任务,一次循环执行
  * 宏任务:
  *   settimeout setimmediate(ie) messagechannel(chrome 异步 宏任务)
  * 
  * 微任务:
  *   then
  *   mutationobserver(h5 兼容性差)
  * 
  * 
  * 
  * 
  * 
  */

  setImmediate(()=>{
    console.log('immediate');
  })

  setTimeout(() => {
    console.log('ttimeout');
  }, 0);