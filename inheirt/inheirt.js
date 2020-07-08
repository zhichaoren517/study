// 构造函数绑定
// function Animal(){
//     this.species = 'animal'
// }

// function Cat(name,color){
//     Animal.apply(this,arguments)
//     this.name = name;
//     this.color = color
// }

// let cat = new Cat('求求','black')
// console.log(cat);

//二、 prototype模式

// function Animal(){
//     this.species = 'animal'
// }

// function Cat(name,color){
//     this.name = name;
//     this.color = color
// }
// Cat.prototype = new Animal()
// 任何一个prototype对象都有一个constructor属性，指向它的构造函数。如果没有"Cat.prototype = new Animal();"这一行，Cat.prototype.constructor是指向Cat的；加了这一行以后，Cat.prototype.constructor指向Animal。
// Cat.prototype.constructor = Cat
// let cat = new Cat('求求','black')
// console.log(cat);

// 三、 直接继承prototype
// 与前一种方法相比，这样做的优点是效率比较高（不用执行和建立Animal的实例了），比较省内存。缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype。

// function Animal(){}
// Animal.prototype.species = 'animal'
// function Cat(name,color){
//     this.name = name;
//     this.color = color
// }

// Cat.prototype = Animal.prototype;
// Cat.prototype.constructor = Cat
// var cat = new Cat("大毛","黄色");
// console.log(cat);



// 四、 利用空对象作为中介

// function Animal(){}
// Animal.prototype.species = 'animal'
// function Cat(name,color){
//     this.name = name;
//     this.color = color
// }

// function _extend( c , p ){
//     let F = function f(){};
//     F.prototype = p.prototype;
//     c.prototype = new F()
//     c.prototype.constructor = c
//     // 意思是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。
//    （uber是一个德语词，意思是"向上"、"上一层"。）这等于在子对象上打开一条通道，可以直接调用父对象的方法。
//      这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
//     c.prototype.uber = p.prototype;
// }
// _extend( Cat , Animal );
// let cat = new Cat("大毛","黄色");
// console.log(cat);


// 五、 拷贝继承


// function Animal(){}
// Animal.prototype.species = 'animal'
// function Cat(name,color){
//     this.name = name;
//     this.color = color
// }
// let a = Animal.prototype;
// let chi = Cat.prototype;
// for( i in a ){
//     console.log(a[i]);
//     chi[i] = a[i]
// }
// let cat = new Cat('qiuqiu','red')
// console.log(cat);


// 以上是构造函数的继承;除了构造函数的继承还有对象的继承;对象的继承主要是用深拷贝实现,浅拷贝只能是基本数据类型
