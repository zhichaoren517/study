import  Observe from "./observe"

export function initState( vm ){
    let opts = vm.$options ;
    if( opts.data ){
        initData( vm )
    }  
    if( opts.computed ){
        initComputed( vm )
    }  
    if( opts.watch ){
        initWatch( vm )
    }  
}

export function observe( data ){
    // 如果不是对象或者是null, 不用执行后续逻辑
    if( typeof data !== "object" || data == null ){
        return 
    }
    return new Observe( data )
}

function proxy( vm , source , key ){
    Object.defineProperty( vm , key , {
        get(){
            return vm[ source ][  key ]
        },
        set( newValue ){
            vm[ source ][ key ]  = newValue
        }
    } )
}

function initData( vm ){
    // 将用户传入的数据通过object.defineProperty重新定义
    let data = vm.$options.data ;
    // 属性重新定义不破坏原来的data , 重新定义一个_data
    data = vm._data = typeof data === "function" ? data.call( vm ) : data || {} ;
    for( let key in data ){
        proxy( vm , '_data' , key  )
    }
    observe( vm._data )
}
function initComputed(){}
function initWatch(){}

 