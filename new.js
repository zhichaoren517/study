function Person(name , age){
    this.name = name;
    this.age = age
}
let p1 = new Person('jack' , 18)
console.log(p1);
    //      在new一个对象的过程中都发生了哪些事情？
    //     1.创建一个新对象，比如：var obj = {};
    //     2.将新对象的_proto_属性指向构造函数的原型对象；
    //     3.将构造函数的作用域指向新对象，即将this指向obj；
    //     4.执行构造函数内部的代码，将属性添加给this对象；
    //     5.返回新对象obj；
function myNew (o , ...arg){
    var obj = new Object();
    obj.__proto__ = o.prototype ; 
    var res =  o.call( obj , ...arg );
    return typeof res == 'object' ? res : obj
}
let p2 = myNew( Person , 'rose' , 12 )
console.log(p2);

var a = {
    i : 1,
    toString(){
        return this.i ++
    }
}

if( a == 1 && a== 2 && a==3 ){
    console.log(1);
    
}
