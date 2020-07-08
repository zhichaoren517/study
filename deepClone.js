// 实现一个深拷贝
var r = 1
var e = {
    r:r
}
let obj = {
    a:1,
    b:{
        c:e
    },
    d:[1,2,3]
}
var a = {}
a.a = a

function deepClone(obj , hash=new WeakMap()){
    if( obj == null )  return ;
    if( typeof obj == RegExp ) return obj ; 
    if( typeof obj == Date ) return obj ;
    if( typeof obj !== "object" ) return obj ; 
    if( hash.has( obj ) ) return hash.get(obj);
    let instance = new obj.constructor;
    hash.set( obj , instance )
    for( key in obj ){
        if( obj.hasOwnProperty(key) ){
            instance[key] = deepClone( obj[key] , hash )
        }
    }
    return instance
}
let o = deepClone(a)
obj.d = 1
console.log(o);


