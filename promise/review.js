Promise.race = function ( values ){
    return new Promise ( ( resolve , reject ) => {
        for (let i = 0; i < values.length; i++) {
            let cur = values[i];
            if( ( typeof cur === "object" && cur !== "null" ) || typeof cur ==="function" ){
                let then = cur.then
                if( typeof then === "function" ){
                    then.call( cur , resolve , reject )
                }else{
                    reject(cur)
                }
            }else{
                reject( cur )
            }
        }
    } )
}

Promise.all = function(values){
    return new Promise( ( resolve , reject ) => {
        let count = 0 ;
        let res = []
        let processData = ( cur , i ) => {
            res[i] = cur
            if( ++ count == values.length ){
                resolve( res )
            }
        }
        for (let i = 0; i < values.length; i++) {
            let cur = values[i];
            if( ( typeof cur === "object" && cur !== "null" ) || typeof cur === "function" ){
                let then = cur.then;
                if( typeof then === "function" ){
                    then.call( cur ,  y => processData( cur , i ) , reject )
                }{
                    reject( cur )
                }
            }
            
        }
    } )
}