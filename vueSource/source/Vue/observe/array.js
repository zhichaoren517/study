
// 主要做的事是拦截用户对数组的push pop shift等行为

import { observe } from ".";


let oldArrayProtoMethods = Array.prototype

export let arrayMethods = Object.create( oldArrayProtoMethods )

let methods = [
    "push",
    "pop",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "splice"  
]

export function observeArray( inserted ){//循环数组对数组重的每一项进行观测
    for (let i = 0; i < inserted.length; i++) {
            observe( inserted[i] )
    }
}

methods.forEach( method => {
    arrayMethods[ method ] = function( ...args){
        oldArrayProtoMethods[ method ].apply( this , args ) ;
        console.log('调用了数组更新的方法');
        let inserted;
        switch (method) {
            case "push":
            case "unshift":
                inserted = args
                break;
            case "splice":
                inserted = args.slice(2)
            default:
                break;
        }
        if( inserted ){
            observeArray( inserted )
        }
    }
});