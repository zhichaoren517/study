// 实现一个深拷贝

// let obj = {
//     a:1,
//     b:{
//         b:1
//     }
// }
let obj = {}
obj.a = obj
function deepClone(obj , hash=new WeakMap()){
    if( obj == null ) return obj ; //不能是空
    if( obj instanceof RegExp ) return new RegExp( obj );//不能是正则类型的数据
    if( obj instanceof Date ) return new Date( obj );//不能是date类型的数据
    if( typeof obj !== "object" ) return obj;//如果不是对象
    if( hash.has(obj) )return hash.get( obj );
    // 其他情况 数组/对象
    let instance = new obj.constructor
    hash.set( obj , instance )

    console.log(hash);
    
    for( let key in obj ){
        if( obj.hasOwnProperty(key) ){
            instance[key] = deepClone( obj[key] , hash )
        }
    }
    return instance
}
console.log( deepClone( obj )  );

