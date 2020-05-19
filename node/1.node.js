// !function(){
//     console.log(this)
// }()

// process.env // 执行环境
// process.argv//执行参数
// process.cwd()//当前的执行目录(执行process.cwd()命令时所在的目录,而不是当前文件的目录) 可变的

// console.log(process.env.NODE_ENV);

// let env = process.env.NODE_ENV
// let host = env == 'dev' ? "loccalhost:8080":"www.zf.com"

// console.log( host );
// console.log( process.argv,'process.argv' );
console.log( process.cwd(),'process.cwd' );

// let obj = process.argv.slice(2).reduce( ( pre , cur , i , arr ) => {
//     if( cur.includes('--') ){
//         pre[ cur.slice(2) ] = arr[ i +1 ]
//     }
//     return pre
// },{} )
// console.log(obj,'obj');
