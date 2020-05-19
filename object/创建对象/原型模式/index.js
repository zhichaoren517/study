/*

    function Person( name , age ){
        this.name = name , 
        this.age = age
    }
    Person.prototype.job = "programmer"
    var person1 = new Person( "jack" , 24 )
    console.log(Person.prototype.isPrototypeOf( person1 ));//true 判断括号里的对象的[[ prototypt ]]( __proto__ )是否指向 Person.prototype 
    console.log( person1.__proto__ == Person.prototype );//true

    ///////////////////////////////////////

    //可以通过对象实例访问保存在原型中的值,但是却不能通过对象实例改写保存在原型中的值.如果在实例上添加了一个和原型相同的属性,那么该属性会屏蔽掉原型中的那个属性(也就是说会阻止访问原型中的属性).这跟对象的读取属性有关.
    //当代码读取某个对象的属性时候,都会执行一次搜索,目标是具有给定名字的属性.搜索先从实例本身开始,,如果找到则返回该属性的值;如果没找到,则继续搜索指针指向的原型对象,如果找到那么返回该属性的值.
    function Person(){}
    Person.prototype.name = "jack";
    Person.prototype.age = 24;
    Person.prototype.job = function(){
        return "programmer"
    };
    var person1 = new Person();
    var person2 = new Person()
    console.log(person1.name);//jack
    person1.name = "rose"
    console.log(person1.name);//rose
    console.log(person2.name);//jack
    console.log( person1.__proto__.name );//jack

    /////////////////////////////////////////

    function Person(){}
    // Person.prototype.name = "jack"
    Person.prototype = {
        // constructor:Person,
        name:"jack",
        age:24,
        job:function(){
            return "programmer"
        }
    }
    var person1 = new Person()
    console.log( person1 instanceof Object );//true
    console.log( person1 instanceof Person );//true
    console.log( person1.constructor === Object );//true
    console.log( person1.constructor === Person );//false

    function Person(){}
    Person.prototype.name = "jack"
    Person.prototype.age = 24
    Person.prototype.job = function(){
        return "programmer"
    }
    var p1 = new Person()
    p1.name = "rose"
    p1.age = 18
    console.log( Object.getOwnPropertyNames( p1 ) );
    console.log( Object.getOwnPropertyNames( Person.prototype ) );

*/

// function Person(){}
// Person.prototype = {
//     constructor:Person,
//     name:"jack",
//     age:24,
//     firend:[ "rose" ]
// }
// var p1 = new Person()
// var p2 = new Person()
// console.log( p2.firend );//[ 'rose' ]
// console.log( p1.firend );//[ 'rose' ]
// p1.firend.push( "renzhch" )
// console.log( p1.firend );//[ 'rose', 'renzhch' ]
// console.log( p2.firend );//[ 'rose', 'renzhch' ]

// function Person(){}
// Person.prototype.name = "jack"
// Person.prototype.age = 24
// var p = new Person()
// console.log( p instanceof Object );
// console.log( p instanceof Person );
// console.log( Person.prototype.constructor == Object );
// console.log( Person.prototype.constructor == Person );

// function Person(){}
// Person.prototype = {
//     constructor:Person,
//     name:"jack",
//     age:24,
//     job:function(){
//         return "programmer"
//     }
// }
// var p = new Person()

// console.log( p instanceof Object );
// console.log( p instanceof Person );
// console.log( Person.prototype.constructor == Object );
// console.log( Person.prototype.constructor == Person );

// for( i in p ){
//     console.log( i );
    
// }

function Person(){}
Person.prototype = {
    constructor:Person,
    name:"jack",
    age:24,
    firend:[ "rose" ]
}

var p1 = new Person()
var p2 = new Person()
p1.job = "aa"
console.log( Object.getOwnPropertyNames( Person.prototype ) );















