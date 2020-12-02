//  1、object构造函数
/*
    var person = new Object();
    person.name = "jack";
    person.age = 24;
    person.job = function(){
        return "programmer"
    }
    console.log( person.job() );
*/

/////////////////////////////////////////////////////////////////////////////////////

//  2、字面量
/*
    var person = {
        name : "jack",
        age : 24,
        job : function(){
            return "programmer"
        }
    }
    console.log(person.job());
*/

/////////////////////////////////////////////////////////////////////////////////////

//  3、工厂模式

/*
    function createPerson( name , age , job ){
        var person = new Object;
        person.name = name ; 
        person.age = age ;
        person.job = job;
        person.sayName = function(){
            console.log( this.name );
        }
        return person
    }
    var p = createPerson( "jack" , 24 , function(){ return "programmer" } )
    p.sayName()
*/

/////////////////////////////////////////////////////////////////////////////////////

// 4、构造函数模式
/*
    function Person( name , age ){
        this.name = name ;
        this.age = age ; 
        this.job = function(){
            return "programmer"
        }
        // this.job等价于下面这行,所以每次创建person的实例的时候,都会创建一个方法的实例,但是这些方法完成的任务全部一样,这也是构造函数模式的缺点
        // this.job = new Function( 'return "programmer"' )
    }
    var person1 = new Person( "jack" , 24 )
    var person2 = new Person( "rose" , 18 )
    console.log(person1);
    console.log(person2);
    console.log( person1.job == person2.job );//false

    ///////////////////////////////////////

    //通过把相同的函数定义在函数外部,来解决多次创建实例方法的问题.但是这样又有一个问题--这些方法全部都被注册在全局上,只能被某个对象调用,这让全局作用域有点名不副实.
    //更让人受不了的是如果对象要定义很多个方法,那么就要定义很多个全局函数,于是我们这个自定义的引用类型就丝毫没有封装性可言了
    function Person( name , age ){
        this.name = name ; 
        this.age = age
        this.job = getJob
    }
    function getJob(){
        return "programmer"
    }
    var person1 = new Person( "jack" , 24 )
    var person2 = new Person( "rose" , 18 )
    console.log(person1.job());
    console.log(person2.job());

    */

    //      在new一个对象的过程中都发生了哪些事情？
    //     1.创建一个新对象，比如：var obj = {};
    //     2.将新对象的_proto_属性指向构造函数的原型对象；
    //     3.将构造函数的作用域指向新对象，即将this指向obj；
    //     4.执行构造函数内部的代码，将属性添加给this对象；
    //     5.返回新对象obj；
    
    
    function Person(name,age){
        this.name  = name;
        this.age = age
    }


    function createObj( constructor , ...props ){

        var newObj = new Object()
        newObj.__proto__ = constructor.prototype;
        var res = constructor.call( newObj , ...props )
        return typeof res == "object" ? res : newObj
    
    }

    let p = new Person( 'jack' , 18 )
    console.log(p,'p');

    let p1 = createObj( Person , 'rose' , 12 )
    console.log(p1,'p1');
    

    
   












    
    