
function resolvePromise( promise2 , x , resolve , reject ){
    if( promise2 === x ){
        return reject( new TypeError("循环引用") ) 
    }
    if( typeof x === "function" || ( typeof x === "object" && x !== "null" ) ){

        // 如果取then方法出错 那就用错误拒绝   promise2 可能是用object.defineProperty()设置的then方法

        try {
            let _then = x.then
            _then( y => {
                resolvePromise( promise2 , y , resolve , reject )
            } , r => {
                reject( r )
            } )
        } catch (e) {
            reject( e )
        }

    }else{
        resolve( x )
    }

}

class Promise{
    constructor( executor ){

        this.state = "pending"
        this.value;     //成功的参数
        this.reason;    //失败的参数
        this.fulfillCb = [];
        this.rejectCB = [];

        let resolve = ( value ) => {
            if( value instanceof Promise ){
                // 如果resolve了一个promise对象,那么需要调这个对象的then方法,并把成功和失败的回调传进去
                return value.then( resolve , reject )
            }
            if( this.state == 'pending' ){
                this.state = "fulfilled"
                this.value = value ;
                this.fulfillCb.forEach( fn => fn() )
            }
        }

        let reject = ( reason ) => {
            if( this.state == "pending" ){
                this.state = "rejected"
                this.reason = reason ;
                this.rejectCB.forEach( fn => fn() )
            }
        }
        try {
            executor( resolve , reject )
        } catch (error) {
            reject(error)
        }

    }
    then( onfulfilled , onrejected ){
        onfulfilled = typeof onfulfilled === "function" ? onfulfilled : val => val;
        onrejected = typeof onrejected === "function" ? onrejected : err => { throw err }
        let promise2 ;
        promise2 = new Promise( ( resolve , reject ) => {
            if( this.state == "fulfilled" ){
                setTimeout(() => {
                    try {
                        let x = onfulfilled( this.value )
                        resolvePromise( promise2 , x , resolve , reject )
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            }
            if( this.state == "rejected" ){
                try {
                    let x = onrejected( this.reason )
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            }
            if( this.state == "pending" ){
                this.fulfillCb.push( () => {
                    try {
                        let x = onfulfilled( this.value )
                        resolve(x)
                    } catch (e) {
                        reject(e)
                    }
                } )
                this.rejectCB.push ( () => {
                    try {
                        let x = onrejected( this.reason )
                        resolve(x)
                    } catch (e) {
                        reject(e)
                    }
                } )
            }
        } )
        return promise2
    }
    catch( rejectFunc ){
        return this.then( null , rejectFunc )
    }
}
//暴漏一个方法,这个方法需要返回一个对象,对象上需要有promise resolve reject三个属性
// 测试promise方法用
//减少嵌套
    // function read(){
    //     let dfd = Promise.defer();
    //     ......
        
    //     dfd.resolve()
    //     dfd.reject()
    //     return dfd.promise
        
    // }
Promise.defer = function(){
    let dfd = {}
    dfd.promise = new Promise( ( resolve , reject ) => {
        dfd.resolve = resolve
        dfd.reject = reject
    } )
    return dfd
}
Promise.resolve = function( val ){
    return new Promise( ( resolve , reject ) => {
        resolve(val)
    } )
}
Promise.reject = function( reason ){
    return new Promise( ( resolve , rejec ) => {
        reject( reason )
    } )
}
Promise.all = function( values ){
    return new Promise( ( resolve , reject ) => {
        let result = [];
        let count = 0;
        let processData = ( value , index  ) => {
            result[ index ] = value
            if ( ++ count == values.length ) {
                resolve( result )
            }
        }
        for ( let i = 0; i < values.length; i ++ ) {
            let current = values[ i ]
            if ( ( typeof current === "object" && current != null ) || typeof current === "function" ) {
                if ( typeof current.then === "function" ) {
                    current.then( y => { processData( current , i ) } , reject )
                }else{
                    processData( current , i )
                }
            }else{
                processData( current , i )
            }
        }
    } )
}
Promise.race = function( values ){
    return new Promise( ( resolve , reject ) => {
        for ( let i = 0; i < values.length; i ++ ) {
            let current = values[ i ]
           if ( ( typeof current === "object" && typeof current != "null" ) || typeof current === "function"  ) {
                let then = current.then
                if ( typeof then === "function" ) {
                    then.call( current , resolve , reject )
                }else{
                    resolve( current )
                }
           }else{
               resolve( current )
           }
            
        }
    } )
}
module.exports = Promise



// mz 一个第三方的包,把node中所有的包都进行了包装promise