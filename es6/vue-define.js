
// Object.defineProperty(obj,key,{})
function update(){
    console.log("更新视图");
}

let arr = [1,2]

// var obj = {
//     a:{name:"zf"},
//     b:{
//         c:1
//     }
// }
let proto = Object.create( Array.prototype );

[ "pop" , "push" , "shift" , "unshift" , "reverse" , "sort" , "splice" ].forEach( method => {
    
    proto[ method ] = function(){
        update()
        Array.prototype[method].call( this , ...arguments )
    }
} )

function update(){
    console.log("更新视图")
}
function observer( obj ){
    if( Array.isArray( obj ) ){
        // return obj.__proto__ = proto
        return Object.setPrototypeOf( obj,proto )
    }
    if( typeof obj !== "object" ) return obj;
    for (let key in obj) {
            definReactive( obj , key , obj[key] )
    }
}
function definReactive( obj , key , value ){
    observer(value)
    Object.defineProperty( obj , key , {
        get(){
            return value
        },
        set( newValue ){
            
            if( typeof newValue === "object" ){
                observer(newValue)
            }
            update()
            value = newValue
        }
    } )
}
observer(arr)
arr.push(2);
console.log(arr);

