
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15

// function add(){
//     let _arg = [].slice.call( arguments )
//     return function(){
//         let arg = [].slice.call( arguments )
//         if( arg.length ){
//             _arg = _arg.concat( arg )
//             return arguments.callee
//         }else{
//             return _arg.reduce( ( pre , cur , index , arr ) => {
//                 return pre + cur
//             } )
//         }

//     }
// }

// let sum = add(1,2,3)(2)(4)
// console.log(sum);

// function add(  ){
//     return 
// }
function curry( fn ){
    let arr = [];
    let length = fn.length;
    return function(){
        let _arg = [].slice.call( arguments )  
        arr = arr.concat( _arg )
        if(  _arg.length && arr.length < length ){
            return arguments.callee
        }else{
            return fn.call( this , ...arr )
        }
    
    }
}

let add = curry( function ( a , b ,c=0){
    return a + b + c
} )

console.log( add(1)(3)  );
