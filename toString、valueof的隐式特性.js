// var obj = {
//      age:10,
//      valueOf:function(){
//         console.log( "执行了valueOf" )
//         return i + 1
//      },
//      toString:function(){
//         console.log( "执行了toString" )
//         return this.valueOf() + 10
//      }
// }
// console.log(obj);


// function arr(arr){
//    arr = arr.filter( item => item > 1 )
//    console.log(arr);
   
//    return arr
// }
// arr([1,2,4])

function createComparison( propertyName ){
   return function( object1 , object2 ){
      var v1 = object1[ propertyName ]
      var v2 = object2[ propertyName ]
      if(  v1 < v2 ){
         return -1;
      }else if( v1 > v2 ){
         return 1;
      }{
         return 0;
      }
   }
}
var data = [
   {
      name:"jack",
      age:18
   },
   {
      name:"rose",
      age:20
   },
   {
      name:"renzhch",
      age:12
   }
]
data.sort( createComparison( "age" ) )
// console.log(createComparison());
console.log(data);


