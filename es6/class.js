class Point {
    constructor(){
       console.log( new.target.name )
    }
    toString(){
        return this.x + "=====>" + this.y
    }
}

class ColorPoint extends Point {
    constructor(){
        super();
    }
    toString(){
        return this.color + ' ' + super.toString();
    }

}

var cp = new ColorPoint( 'red' , 'black' , 'blue' )
var po = new Point()


// class VersionedArray extends Array {
//     constructor() {
//       super();
//       this.history = [[]];
//     }
//     commit() {
//     debugger
//       this.history.push(this.slice());
//       console.log( this.slice())
//     }
//     revert() {
//       this.splice(0, this.length, ...this.history[this.history.length - 1]);
//     }
//   }
  
//   var x = new VersionedArray()

//   x.push(1)
//   x.commit()
//   x.push(2,3)
//   x.commit()

// class里面注册的函数不能在全局直接调用,class内部遵循的是严格模式,并没有全局变量window,所以直接调用会报错,可以在内部bind绑定下this指向

// class Logger{
//     constructor(){
//         this.printName = this.printName.bind(this)
//     }
//     printName( name = "jack" ){
//         this.print( `hello ${ name }` )
//     }
//     print( text ){
//         console.log(text);
//     }
// }

// const logger = new Logger()
// // logger.printName()
// const { printName } = logger
// console.log(printName.toString());

