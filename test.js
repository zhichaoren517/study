// function Foo() {
//     getName = function () {
//         console.log (1);
//      };
//     return this;
// }
// Foo.getName = function () { 
//     console.log (2);
// };
// Foo.prototype.getName = function () { 
//     console.log (3);
// };
// var getName = function () {
//     console.log (4);
// };
// function getName() {
//     console.log (5);
// }
 
// // //请写出以下输出结果：
// Foo.getName(); // 2
// getName();//4
// Foo().getName();//1
// getName();//1
// new Foo.getName();//2
// new Foo().getName();//3
// new new Foo().getName();//3
// ///////////////////////////////////
// function User(name) {
// 	var name = name; //私有属性
// 	this.name = name; //公有属性
// 	function getName() { //私有方法
// 		return name;
// 	}
// }
// User.prototype.getName = function() { //公有方法
// 	return this.name;
// }
// User.name = 'Wscats'; //静态属性
// User.getName = function() { //静态方法
// 	return this.name;
// }
// var Wscat = new User('Wscats'); //实例化


// function Foo() {
// 	this.getName = function() {
// 		console.log(3);
// 		return {
// 			getName: getName //这个就是第六问中涉及的构造函数的返回值问题
// 		}
// 	}; //这个就是第六问中涉及到的，JS构造函数公有方法和原型链方法的优先级
// 	getName = function() {
// 		console.log(1);
// 	};
// 	return this
// }
// Foo.getName = function() {
// 	console.log(2);
// };
// Foo.prototype.getName = function() {
// 	console.log(6);
// };
// var getName = function() {
// 	console.log(4);
// };

// function getName() {
// 	console.log(5);
// } 
// Foo.getName(); 
// getName(); 
// // console.log(Foo())
// Foo().getName(); 
// getName(); 
// new Foo.getName(); 
// new Foo().getName(); 
// //多了一问
// new Foo().getName().getName(); 
// new new Foo().getName(); 

// 2   4   1   1   2   3   3   1   3


// async function async1() {
//     console.log('async1 start');
//     await async2();
//     await async3()
// }

// async function async2() {
//     console.log('async2');
// }

// async function async3() {
//     console.log('async3');
// }

// console.log('script start');

// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)

// async1();

// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });

// console.log('script end');



// s = "kdjaaasassdnvsm;woeijasas"
// t = "asas"

// const strFind = ( s , t ) => {
//     if( s.length < t.length ) return ;
//     let arr = s.split("")
//     arr.forEach( (i , index) => {
//         if( i == t[0] && s.substr( index , t.length ) == t ){
//             console.log( s.substr( index , t.length ) );
//         }
//     });
// }
// strFind( s , t )

// var a={}, b=Symbol('123'), c=Symbol('123');  
// a[b]='b';
// a[c]='c';  
// console.log(a[b]);

// var a={}, b={key:'123'}, c={key:'456'};  
// a[b]='b';
// a[c]='c';  
// console.log(a);


// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 示例
//      输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
//      输出: [5, 6, 7, 1, 2, 3, 4]
//      解释:
//      向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
//      向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
//      向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
// var arr = [1, 2, 3, 4, 5, 6, 7];
// const move = ( arr , k ) => {
//     if( k < 0 ) return ;
//     if( k == 0 ) return arr ;
//     let brr = [ [],[] ]
//     arr.forEach( ( item , index ) => {
//         index <= k ? brr[0].push(item) : brr[1].push( item )
//     });
//     brr[1].reverse().forEach( ( item ,index )=>{
//         brr[0].unshift(item)
//     } )
//     return brr[0]

// }
// console.log(move( arr , 3 ));
// var arr = [1, 2, 3, 4, 5, 6, 7];
// const move = ( arr , k ) => {
//     if( k < 0 ) return ;
//     if( k == 0 ) return arr ;
//     let brr = arr
//     let count = 0
//     while( count<k ){
//         brr.unshift( brr.pop() )
//         count ++ 
//     }
//     return brr
// }
// console.log(move( [-1, -100, 3, 99] , 2 ));

// 打印出 1 - 10000 之间的所有对称数
// 121、1331 等
// let res = []
// for (let index = 0; index < 100; index++) {
//     console.log(index.toString().split('').reverse().join(''));
    
//     index == +(index.toString().split('').reverse().join('')) ? res.push(index) : ""
// }



// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// let arr = [0,0,1,0,3,12]

// function formatArr(arr){
//     let n = 0
//     arr.sort( (a,b)=> a-b ).forEach( (item,index) => {
//             if( item <= 0 ){
//                 arr.push(0);
//                 n ++
//             }
//      })
//      return arr.splice(n)
// }
// console.log(
//     formatArr(arr)
//  );


// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

// 示例：
// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
// let nums = [2, 7, 11, 15], target = 9;  
// function add( nums , target ){
//     let arr = []
//     nums.forEach((item,index) => {
//         let n = target - item
//         let i = nums.indexOf( n ) 
//         if(i>-1){
//             arr.push( index , i )
//         }
//     })
//     let brr = new Set(arr)
//     return Array.from(brr)
// }
// console.log(
//     add(nums,target)
// );

// obj1 = {
//     a:1
// }
// function create(obj){
//     function f(){}
//     f.prototype = obj
//     return f
// }
// let obj = create(obj1)
// console.log(obj1);


// let arr = [ 1 , 3 , 4 , [ 5 , [ 6 , [ 7 , 8 ] ]  ],[] ]
// console.time("time")
// function flatten(arr){
// 	// 3.8ms
// 	let res = []
// 	arr.forEach( item => {
// 		if( Array.isArray(item) ){
// 		 	res = [ ...res , ...flatten(item) ]
// 		}else{
// 			res.push(item)
// 		}
// 	});
// 	return res
// }
// function flatten(arr){
// 	// 4.335ms
// 	console.log(arr.toString().split(","));
// }
// function flatten(arr){
// 	// 3.6
// 	return arr.reduce( ( pre,cur , index , arr ) => {
// 		return pre.concat( Array.isArray(cur) ? flatten(cur) : cur )
// 	},[] )
// }
// console.log(flatten(arr));
// console.timeEnd("time")


// 实现一个instanceof

// function myInstanceof( left , right ){
// 	let l = left.__proto__ ;
// 	let r = right.prototype ;
// 	while( true ){
// 		if( l == null ){
// 			return false
// 		}
// 		if( l == r ){
// 			return true
// 		}
// 		l = l.__proto__
// 	}
// }
// console.log( myInstanceof( "" , Array ) );


// 实现一个深拷贝

// function deepClone( obj , hash=new WeakMap() ){

// 	if( obj == null ) return ;
// 	if( typeof obj == RegExp ) return obj ;
// 	if( typeof obj == Date ) return obj ;
// 	if( typeof obj != "object" ) return obj ;
// 	if( hash.has( obj ) ) return has.get( obj )
// 	let instance = new obj.constructor ;
// 	hash.set( obj , instance )
// 	for (let k in obj) {
// 		if (obj.hasOwnProperty(k)) {
// 			instance[k] = deepClone(obj[k])
// 		}
// 	}

// }

// 实现一个new
// function Person(name,age){
// 	this.name = name ; 
// 	this.age = age ;
// }
// function myNew( o , ...arg ){
// 	var obj = new Object();
// 	obj.__proto__ = o.prototype;
// 	var res = o.call( obj , ...arg )
// 	return typeof res == "object" ? res : obj
// }
// let p = myNew( Person , 'jack' , 24 )
// console.log(p);



// function fun (){
//     for(let i=0;i<10;i++){
//         this.a = i
//         this.$nextTick(() => {
//             console.log(this.a)
//         })
//     }
// }
// fun()
// let arr = [1,2,3,4]
// console.log( arr.slice( 1 , 2 ) );
// console.log( arr );





// // 斐波那契
// var fibonacci = function (){
// 	let memo = [ 0 , 1 ]
// 	let lib = function ( n ){
// 		if( memo[ n ] == undefined ){
// 			memo[n] = lib( n - 1 ) + lib( n - 2 )
// 		}
// 		console.log( memo )
// 		return memo[n]
// 	}
// 	return lib

// }()

// console.log(fibonacci(50));

// function fibonacci( n ){
// 	var n1 = 1 , n2 = 1 , sum ;
// 	if( n == 1 || n == 2 ){
// 		return n1
// 	}
// 	for( let i = 2 ; i < n ; i++ ){
// 		sum = n1 + n2 ;
// 		n1 = n2 ; 
// 		n2 = sum
// 	}
// 	return sum
// }
// console.log(fibonacci(100));
// 1234567890.12
// 1,234,567,890.12
// function formate( num ){
// 	let n = String( num )
// 	let arr = n.split('.')
// 	let str = `.${arr[1]}` || ""
// 	let o = arr[0].split('').reverse()
// 	for (let i = 1; i < o.length; i++) {
// 		if( i % 3 == 0 ){
// 			o[i] = o[i]+','
// 		}
// 	}
// 	return o.reverse().join('') + str
// }
// formate( 1234567890.12 ) 

// let str = 'aaa  dd f g;fd分 1 2dd 113 512'


// const reg = /\s+/gi
// function formate(str){
// 	let s = String(str)
// 	let t = s.replace(reg, ',').split(',')
// 	let arr = [] ;
// 	for (let i = 0; i < t.length; i++) {
// 		if( i % 4 == 0 ){
// 			arr.push([])
// 		}
// 		arr[ arr.length-1 ].push( t[i] )
// 	}
// 	return arr
	

// }
// console.log(formate(str));

// 1593934387043
// function timeFormate( t ){
// 	if( t.toString().length == 10 ){
// 		t = t * 100
// 	}
	
// 	if( t.toString().length !=10 && t.toString().length != 13 ){
// 		return "时间戳格式不正确"
// 	}
// 	let n = Date.now();
// 	let o = ( n - t ) / 1000
	
// 	let tHBefore = 2 * 60 * 60
// 	if( o < 60 ){
// 		return '刚刚'
// 	}
// 	if( o < tHBefore && o >= 60 ){
// 		return "2小时前"
// 	}
// 	if( o > tHBefore ){
// 		let date = new Date( t )
// 		let y = date.getFullYear()
// 		let m = date.getMonth() + 1
// 		let d = date.getDate()
// 		let h = date.getHours()
// 		let mi = date.getMinutes()
// 		return `${y}-${m}-${d} ${h}:${mi}`
// 	}
	
// }
// console.log( timeFormate( 1511111187043 ) );







// 1,234,567,890.12
// function formate( num ){
// }
// formate( 1234567890.12 ) 

// let str = '1234567890.12'
// console.log( str.split('').reverse().join('').replace( /^/gi , str ) );


// let str = "  a b c  "

// let reg = /^\s+|\s+$/gi
// console.log( str.replace( reg,'' ) );

// console.log( str.split('') );


// function Foo() {
// 	getName = function() {
// 		console.log(1)
// 	}
// 	return this;
// }
// Foo.getName = function() {
// 	console.log(2)
// }
// Foo.prototype.getName = function() {
// 	console.log(3)
// }
// var getName = function() {
// 	console.log(4)
// }

// function getName() {
// 	console.log(5)
// }
// Foo.getName();
// getName()
// Foo().getName()
// getName();
// new Foo.getName();
// new Foo().getName()


// var o1 = {
// 	start:0,
// 	end:6
// }
// var o2 ={
// 	start:6,
// 	end:30
// }

// var o3 ={
// 	start:6,
// 	end:30
// }

// function check( l , r ){
// 	let lStart = l.start ;
// 	let lEnd = l.end ;
// 	let rStart = r.start ;
// 	let rEnd = r.end ;
// 	if( lStart < rStart && lEnd < rStart ){
// 		return false
// 	}else if( rStart < lStart && rStart < lEnd ){
// 		return false
// 	}
// 	return true
// }

// function checkAndMerge( arr ){


// }

// console.log(  checkAndMerge( [ o1 , o2 , o3 ] )  );
// var arr = [ 6,5,7,3,8,2,1,9 ]
// function mergeSort(arr){
// 	if( !Array.isArray(arr) ) return arr ;
// 	if( arr.length <= 1 ) return arr ;
// 	let left = [] , right = [] ;
// 	let num = Math.floor( arr.length / 2 );
// 	let numVal = arr.splice( num,1 )[0] ;
// 	for (let i = 0; i < arr.length; i++) {
// 		if( arr[i] < numVal ){
// 			left.push(arr[i])
// 		}else{
// 			right.push(arr[i])
// 		}
// 	}
// 	return [ ...mergeSort(left) , numVal , ...mergeSort(right) ]
// }

// console.log(mergeSort(arr));

// function debounce( fn , wait ){
// 	let timer
// 	return function(){
// 		if( timer ) clearTimeout( timer );
// 		timer = setTimeout( () => {
// 			fn()
// 		} ,wait)
// 	}
// }
// function immediateDebounce(){
// 	let timer ; 
// 	return function(){
// 		if( timer ) clearTimeout(timer);
// 		let callNow = !timer ; 
// 		timer = setTimeout(() => {
// 			timer = null
// 		},wait);
// 		if( callNow ) fn();
// 	}
// }
// var obj = {
//     name : 'jack',
//     age : 18
// }
// var name = 'rose';
// var age = 10
// function person( name , age ){
//     console.log(this.name);
//     console.log(this.age); 
//     console.log(name);
//     console.log(age);
// }

// Function.prototype.createApply = function(context){
// 	var ctx = context||window ;
// 	ctx.fn = this ; 
// 	var _arg = [ ...arguments ][1]
// 	var result = _arg ? ctx.fn(..._arg) : ctx.fn()
// 	ctx.fn = null
// 	return result 
// }

// Function.prototype.createCall = function(context){
// 	var ctx = context || window ;
// 	ctx.fn = this ;
// 	var _arg = [ ...arguments ].slice(1)
// 	var res = _arg ? ctx.fn(..._arg) : ctx.fn()
// 	return res
// }
// Function.prototype.createBind = function(context){
// 	var ctx = context ; 
// 	var arg = [ ...arguments ].slice(1);
// 	var _this = this 
// 	return function(){
// 		var _arg  = [ ...arguments ]
// 		ctx.fn
// 		_arg? _this.call( ..._arg , ...arg ) : _this.call( ..._arg )
// 	}
// }

// person.createBind(obj,'hahah',111)

// class Event{
// 	constructor(){
// 		this.handlers = {}
// 	}
// 	on(key,fn){
// 		if( !this.handlers[key] ){
// 			this.handlers[key] = []
// 		}
// 		this.handlers[key].push(fn)
// 	}
// 	trigger(key,...arg){
// 		debugger
// 		let fns = this.handlers[key];
// 		if( !fns ||fns.length == 0 ){
// 			return "Empty"
// 		}
// 		fns.forEach( fn => {
// 			fn(...arg)
// 		});
// 	}
// 	once(key , fn){
// 		let _this = this ;
// 		function _on(){
// 			fn.call( this , ...arguments )
// 			_this.remove(key , _on)

// 		}
// 		this.on( key , _on )
// 	}
// 	remove(key , fn){
// 		let fns = this.handlers[key];
// 		if( !fns ){
// 			return false
// 		}
// 		if( !fn ){
// 			fns && ( fns.length = 0 );
// 		}
// 		fns.forEach( (item,index) => {
// 			item == fn &&  fns.splice( index,1 )
// 		} )
// 	}
// }
// let $event = new Event()
// function handler(){
// 	console.log(arguments);
// 	console.log('fuck');
// }
// $event.on("fuckU",handler)
// $event.once("fuckU",handler)
// $event.trigger("fuckU","qwer","asdf")
// $event.trigger("fuckU","qwer","asdf")

// class Subject{
// 	constructor(name){
// 		this.name = name ;
// 		this.state = "sleep"
// 		this.observe = []
// 	}
// 	setState(state){
// 		this.state = state ; 
// 		this.observe.forEach( item => {
// 			item.update && item.update(state)
// 		} )
// 	}
// 	getState(){
// 		return this.state
// 	}
// 	attach(...o){
// 		this.observe.push(...o)
// 	}
// }
// class Observe{
// 	constructor(sub , name){
// 		this.sub = sub ;
// 		this.name = name
// 	}
// 	update(state){
// 		console.log( `${this.name}say:${this.sub.name}${state}了` )
// 	}
// }

// let s = new Subject("bb")
// let father = new Observe( s , "baba" );
// let mather = new Observe(s,'mama');

// s.attach(father,mather)
// s.setState('hahah')



// function fun(n,o){
//     console.log(o);
//     return {
//         fun:function(m){
//             return fun(m,n);
//         }
//     };
//  }
 
//  var a = fun(0);   
//  a.fun(1);   //0
//  a.fun(2);  //0
//  a.fun(3);//0

//  var b = fun(0).fun(1).fun(2).fun(3);
// // undefined  0 1 2

//  var c = fun(0).fun(1);  
//   // undefined 0 
//  c.fun(2);  //1
//  c.fun(3);//1


// for (var i = 0; i < 10; i++ ) {
//     // setTimeout(() => {
//     //     console.log(i);
//     // }, 1000);
//     var i = 'es6'
//     console.log(i);
    
// }
// console.log(i);

// new 

// function Person( name , age){
//     this.name = name ; 
//     this.age = age ;
// }

// function myNew( constructor , ...props ){

//     var newObj = new Object()
//     newObj.__proto__ = constructor.prototype;
//     var res = constructor.call( newObj , ...props )
//     return typeof res == "object" ? res : newObj

// }
// var p = myNew( Person , 'rose',22 ) 
// console.log(p);

Promise.resolve().then( () => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
    }, 0);
} )

setTimeout(() => {
    console.log(3);
    Promise.resolve().then( () => {
        console.log(4);
    } )
}, 0);
// 1 3 4 2
