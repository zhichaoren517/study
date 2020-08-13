let set = new WeakSet([{a:1}])
// weakset的成员只能是对象 , 不能是其他类型的值

// methods: add has delete
const process = require("process")
function usageSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100 + "M";
}

const foo = new WeakSet()
class Foo{
    constructor(){
        this.map = new Array( 10 * 1024 * 1024 )
        foo.add(this.map)
    }
    methods(){
        if( !foo.has(this.map) ){
            throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！')
        }else{

            console.log(foo);
            
        }
    }
}
global.gc()
console.log( usageSize() ); //3.2
let f = new Foo()

global.gc()
console.log( usageSize() );//3.21

f.methods()

global.gc()
console.log( usageSize() );//3.25

f = null ;

global.gc()
console.log( usageSize() );//3.25
