


const fs = require('fs')
const path = require('path')

// 往文件里面追加数据
// fs.appendFile(path.resolve( __dirname,"./aaa.js"  ) , 'q', (err) => {
//     if (err) throw err;
//     console.log('数据已被追加到文件');
// });

// // 文件重命名
// fs.rename( path.resolve( __dirname,"./ccc.js"  ) ,  path.resolve( __dirname,"./aaa.js"  )  ,(err)=>{
//     if (err) throw err;
//     console.log('重命名完成');
//     // 查看文件信息
//     fs.stat( path.resolve( __dirname,"./aaa.js"  ) , (err,stats) => {
//         if (err) throw err;
//         console.log(`文件属性: ${JSON.stringify(stats)}`);
//     } )
// } )
// fs.readFile(path.resolve( __dirname,"./aaa.js"  ) , (err,res) => {
//     if (err) throw err;
//     console.log(res);
// });

// 检查文件是否存在于当前目录中。
// fs.access( path.resolve( __dirname,"./aaa.js"  ), fs.constants.W_OK, (err) => {
//     console.log(` ${err ? '不存在' : '存在'}`);
//   });


// fs.mkdir( path.resolve( __dirname , './bbb.js'),err => {
//     if (err) throw err;
// } ) 
// fs.rmdir( path.resolve( __dirname , './aaa.js'),err => {
//     if (err) throw err;
// } )
// fs.unlink(path.resolve( __dirname , './aaa.js'), (err) => {
//     if (err) throw err;
//     console.log('已成功地删除文件');
// });
fs.link( path.resolve( __dirname , './aaa.js'),err => {
    if (err) throw err;
} )
// fs.readFile( path.resolve( __dirname , './aaa.js' ) ,'utf8', ( err,res )=>{
//     if (err) throw err;
//     console.log(res)
// } )