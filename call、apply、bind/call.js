
// value = "renzhc"

// function csVal(){
//     console.log( this.value )
// }
// var obj = {
//     value:"jack"
// }

// obj.cs = csVal
// csVal()
// obj.cs()

// function Father( name , age ){
//     this.name = name ;
//     this.age = age
// }
// function Mather( name , age ){
//     Father.call( this , name , age )
//     this.say = "good"
// }
// var mamas = new Mather( "yxq" , 38 )
// console.log(mamas);

Function.prototype.mycall = function( context ){
    var context = context || window ;
    var args = [ ...arguments ].slice( 1 )
    context.fn = this
    var res = context.fn( ...args )
    // Reflect.deleteProperty( context , "fn" )
    return res
}

function Father( name , age ){
    this.name = name ;
    this.age = age
}
function Mather( name , age ){
    Father.mycall( this , name , age )
    
    this.say = "good"
}
var mamas = new Mather( "yxq" , 38 )
console.log(mamas);