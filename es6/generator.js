/*


    function * read(){
        yield setTimeout(() => {
            console.log(4);
         }, 4000);  
        yield setTimeout(() => {
            console.log(3);
         }, 3000);  
        yield setTimeout(() => {
            console.log(2);
         }, 2000); 
        yield setTimeout(() => {
            console.log(1);
         }, 1000); 
        // return 100
    }
    let iterator = read()
    iterator.next()
    iterator.next()

*/
    //generator返回的是生成器 , 生成有一个next方法 , 调用这个方法会返回一个对象 ,   对象done : 是否迭代完成 value产出的结果
    // console.log( iterator.next() );
    // console.log( iterator.next() );
    // console.log( iterator.next() );
    // console.log( iterator.next() );
    // console.log( iterator.next() );
    // console.log( iterator.next() );


// const fs = require( "fs" )
// const path = require( "path" )

// function read(url){
//     return new Promise( ( resolve , reject ) => {
//         fs.readFile( path.resolve( __dirname , url) , "utf8" , function( err , data ){
//            if( err )reject(err);
//            resolve(data)
//         } )
//     } )
// }
// function * file(){
//     var f1 = yield read("./闭包.js")
//     console.log(f1);
//     var f2 = yield read("./promise/promise链式调用/age.text")
//     console.log(f2);
    
// }
// var gen = file()
// gen.next()
// gen.next()

// var num = 0 ;
// for( var i = 1 ; i < 10 ; i ++ ){
//     if( i % 5 == 0 ){
//         break
//     }
//     num ++
// }
// console.log(num);


// var myIterable = {};
// myIterable[Symbol.iterator] = function *(){
//     yield 1 ;
//     yield 2 ;
//     yield 3 ;
// }
// console.log(...myIterable);//1   2    3


// function *f(){
//     for ( let i = 0; true ; i ++ ) {
//         var res = yield i ;
//         if( res ){ i = -1 }
//     }
// }

// var g = f()

// console.log(  g.next() );
// console.log(  g.next() );
// console.log(  g.next('a') );

// function * dataConsumer(){
//     console.log('start');
//     console.log( ` 1 , ${ yield } `);
//     console.log( ` 2 , ${ yield } `);
//     console.log( ` 3 , ${ yield } `);
//     return 'result'
// }

// var d = dataConsumer()
// console.log(d);

// d.next()
// d.next('a')
// d.next('b')
// // d.next('c')
// console.log( d.next() );

// function *inner(){
//     yield "hello";
//     yield "world";
// }

// function *outer(){
//     yield "start";
//     yield *inner();
//     yield "end";
// }
// let o = outer()
// console.log(o.next());
// console.log(o.next());
// console.log(o.next());
// console.log(o.next());

let fs = require('fs');
let path = require('path');

async function readFile(){
    let res = await fs.readFile( path.resolve( __dirname , './arrowFn.js' ) , 'utf8',function( err , res ){
        return res;
    }  )
    await console.log(res);
    
}

readFile()

