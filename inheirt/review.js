function Person(name){
    this.name = name;
    this.sum = function(){
        console.log(this.name);
    }
}
Person.prototype.age = 10;

// function Per(){
//     this.name = 'jack'
// }

// 原型链继承
// 缺点:无法传参 , 子类constructor被更改
// Per.prototype = new Person()
// var p1 = new Per()
// p1.sum()


//构造函数继承
// 缺点 不能继承原型上的属性  每个新实例都有父类构造函数的副本，臃肿。
// function Per(){
//     Person.call( this , 'rose' )
//     this.name = 'jack'
// }
// var p1 = new Per()
// console.log(p1);

//组合继承( 组合原型链和构造函数继承 )
//优点  可以传参数,继承了原型上的属性
// 缺点   调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。
// function Per(name){
//     Person.call( this , name )
// }
// Per.prototype = new Person()
// let p1 = new Per( 'jack' )
// p1.sum()

//原型式继承  (利用空对象作为中介)
//缺点 所有实例都会继承原型上的属性 , 无法实现复用( 新实例属性都是后添加上的 )
// function content( obj ){
//     function F(){}
//     F.prototype = obj
//     return new F()
// }
// var p1 = new Person()
// var p2 = content(p1)
// console.log(p2.age);


//  寄生式继承
function content(obj){
    function F(){}
    F.prototype = obj;
    return new F()
}
function subject( obj ){
    var sub = content( obj );
    sub.sex = 'm'
    return sub
}
var p1 = new Person()
var p2 = subject( p1 )
console.log(p2.sex);







