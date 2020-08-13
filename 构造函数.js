
//  来源:::   https://www.jianshu.com/p/a7007f1e522f

    //  在new一个对象的过程中都发生了哪些事情？
    //     1.创建一个新对象，比如：var obj = {};
    //     2.将新对象的_proto_属性指向构造函数的原型对象；
    //     3.将构造函数的作用域指向新对象，即将this指向obj；
    //     4.执行构造函数内部的代码，将属性添加给this对象；
    //     5.返回新对象obj；

    //  1.任何一种对象的创建方式其实内部都是通过函数来实现的;
    //  2.每一个函数都会在生成的时候拥有一个默认的原型属性(prototype),如果把这个函数作为类来理解,prototype里存放的就是类的共同属性特征（Eg:人类都有鼻子眼睛嘴巴,会行走）。
    //  3.每一个原型（prototype）中都有一个默认constructor属性,用来获取原型存在的函数。
    //  4.每一个创建出来的实例对象(Eg:张三),都会拥有默认的隐式属性proto,指向prototype。所以只要是prototype中有的属性,proto都拥有,因此每个实例对象都拥有（Eg:张三拥有人类的所有共同特征

    //  七种数据类型
    //     Number
    //     String
    //     Boolean
    //     undefined
    //     null
    //     Symbol
    //     Object( Array , Map , Set , Function , Object )
    //     其中 前六种可以被统称为基本数据类型




// 字面量方式创建一个object
    // var obj = {
    //     name : "renzhc",
    //     age: function(){
    //         return 25
    //     }
    // }
// new创建
    // var obj = new Object()
    // obj.name = "renzhch"
    // obj.age = function(){
    //     return 25
    // }
    // console.log(obj.age())

//工厂模式
    // let factory = function(role){
    //     function superman(){
    //         this.name = "管理员",
    //         this.role = [ '修改密码', '发布消息', '查看' ]
    //     }
    //     function commonMan(){
    //         this.name = "普通成员",
    //         this.role = [ "查看" ]
    //     }
    //     switch(role){
    //         case "superman" : return new superman();break;
    //         case "man" :return new commonMan();break;
    //         default : throw new Error( "参数错个球了,再调整下!!" )

    //     }
    // }
    // let superman = factory( "women" )

    // 轿车
    // function Car( option ){
    //     this.color = option.color
    //     this.size = option.size
    //     this.door = option.door
    // }
    // // 卡车
    // function Truck( option ){
    //     this.color = option.color
    //     this.size = option.size
    //     this.door = option.door
    // }

    // function Factory(){}
    
    // Factory.prototype.defaultCar = "Car"
    // Factory.prototype.creatCar = function( options ){
    //     options.type !== "car" ? this.defaultCar = Truck :  this.defaultCar = Car
    //     return new this.defaultCar( options )

    // }

    // var carFactory = new Factory();
    // var newCar = carFactory.creatCar({
    //     type:"Car",
    //     color:"red",
    //     door:4,
    //     size:"normal"
    // })


    // var AbstractFactory = (function(){
    //     var types = {Car:Car, Truck:Truck};
    //     return {
    //         // type代表生产汽车的类型，customizations是创建汽车实例所需要的参数。
    //         getVehicle: function(type, customizations){
    //             var Vehicle = types[type];
    //             return (Vehicle ? new Vehicle(customizations) : null);
    //         },
    //         // type代表所要生产的汽车类型， Vehicle代表该汽车类型的构造函数
    //         registerVehicle: function( type, Vehicle ){
    //              var proto = Vehicle.prototype;
    
    //             // 构造函数必须满足一些要求，比如要有drive、brakDown方法，才可以注册到工厂仓库中。
    //             if ( proto.drive && proto.breakDown ) {
    //                 types[type] = Vehicle;
    //             }
    //             return AbstractVehicleFactory;
    //         }
    //     }
    // })()



    //构造函数模式
    // function Person(name,age){
    //     this.name = name;
    //     this.age = age ;
    // }
    // Person.prototype.getAge = function(){
    //     return this.age
    // }
    // var p1 = new Person('renzhch',1)
    // var p2 = new Person('aa',2)
    // // console.log(p1=p2)
    // console.log(p2.getAge())
    // console.log(p1)

    function mynew( construc , arg ){
        let obj = new Object() ; 
        obj.__proto_ = construc.prototype
        let res = construc.apply( obj , arg );
        return typeof res == "object" ? res : obj
    }