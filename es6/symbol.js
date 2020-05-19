
// console.log(s.description);//Symbol.prototype.description ES2019 提供了一个实例属性description，直接返回 Symbol 的描述。浏览器支持,node暂时不支持
// let s = Symbol('a')

// let obj = {}
// obj.s = 'hello world'
// console.log(obj['s']);

// let obj1 = {
//     [s]:"1"
// }
// console.log( Object.getOwnPropertySymbols(obj1) )
// console.log( Reflect.ownKeys(obj1) )


let size = Symbol('size');

class Collection {

  constructor() {
    this[size] = 0;
  }

  add(item) {
      
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
      console.log(instance,this);
      
    return instance[size];
  }
}

let x = new Collection();
console.log(x,'x');

console.log(Collection.sizeOf(x));// 0

x.add('foo');
console.log(Collection.sizeOf(x));// 1


