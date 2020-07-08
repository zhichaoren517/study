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

Function.prototype.myCall = function ( context ){
    var context = context || window ;
    var arg = [ ...arguments ].slice(1)
    context.fn = this ;
    var res = context.fn( ...arg )
    delete context.fn
    
    return res
}

Function.prototype.myApply = function(context){

    var context = context || window ;
    var arg = [ ...arguments ][1]
    context.fn = this;
    var res = arg ? context.fn( arg ) : context.fn()
    delete context.fn
    return res

}

Function.prototype.myBind = function ( ctx ){
    let self = this
    let arg = [ ...arguments ].slice(1)
    return function(){
        self.call( ctx , ...arg , ...arguments ) 
    }

}



console.log( person.myBind( obj , name , age )() );
