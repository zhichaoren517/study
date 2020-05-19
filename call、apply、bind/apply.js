

Function.prototype.myapply = function(context){

    var context = context || window ;
    context.fn = this;
    var args = [...arguments][1]
    var res = args ? context.fn( ...args ) : context.fn()
    
    delete context.fn 
    return res

}

var obj = {
    name : "renzhch"
}
var obj2 = {
    name:"jack"
}
function Person( name ){
    console.log( this.name );
    
}   
Person.myapply(obj)
obj.fn()









// function Father( name , age ){
//     this.name = name ;
//     this.age = age
// }
// function Mather( name , age ){
//     Father.myapply( this , [ name , age ] )
//     this.say = "good"
// }
// var mamas = new Mather( "yxq" , 38 )