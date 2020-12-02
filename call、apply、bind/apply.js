

// Function.prototype.myapply = function(context){

//     var context = context || window ;
//     context.fn = this;
//     var args = [...arguments][1]
//     var res = args ? context.fn( ...args ) : context.fn()
    
//     delete context.fn 
//     return res

// }

var obj = {
    name : 'jack',
    age : 18
}
var name = 'rose';
var age = 10
function person( name , age ){
    console.log(this.name);
    console.log(this.age); 
    console.log(name);
    console.log(age);
}
Function.prototype.createApply = function( context ){
    let ctx = context || window;
        ctx.fn = this
    let _arg = [ ...arguments ][1];
    var res = _arg ? ctx.fn( ..._arg ) : ctx.fn()
    ctx.fn = null
    return res
}
person.createApply( obj , [ 'renzhc',12 ] )










