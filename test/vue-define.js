

let proto = Object.create( Array.prototype );
[  "pop" , "push" , "shift" , "unshift" , "reverse" , "sort" , "splice" ].forEach( method => {
    proto[method] = function(){
        update()
        Array.prototype[method].call( this , ...arguments )
    }
} )

function update(){
    console.log('更新了');
}

function observe( obj ){
    if( Array.isArray( obj ) ){
        Object.setPrototypeOf( obj , proto )
    }
    if( typeof obj != "object" ) return ;
    for (let key in obj ) {
        defineReative( obj , key , obj[key] )
    }
}

function defineReative( obj , key , value  ){
    observe( value )
    Object.defineProperty( obj , key , {
        get(){
            return value
        },
        set(newval){
            if( newval ){
                if( typeof newval == "object" ){
                    observe(newval)
                }
                update()
                value = newval
            }
        }
    } )
}
var arr = [1,2,3]
observe(arr)
arr.push(4)
console.log(arr);
