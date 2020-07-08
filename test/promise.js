class Promise{
    constructor( excutor ){
        this.value;
        this.reason;
        this.fuilCb = [];
        this.rejectCb = [];
        this.state = "pending"; // rejected , fulfilled
        let resolve = ( value ) => {
            if( this.state === 'pending' ){
                this.state = 'fulfilled'
                this.value = value
                this.fuilCb.forEach( fn => fn() )
            }
        }
        let reject = ( reason ) => {
            if( this.state === 'pending' ){
                this.state = 'rejected'
                this.reason = reason
                this.rejectCb.forEach( fn => fn() )
            }
        }
        excutor( resolve , reject )
    }
    then( onFulfilled , onRejected ){
        if( this.state == "fulfilled" ){
            onFulfilled( this.value )
        }
        if( this.state == "rejected" ){
            onRejected(this.reason)
        }
        if( this.state == "pending" ){
            this.fuilCb.push( () => {
                onFulfilled( this.value )
            } )
            this.rejectCb.push( () => {
                onRejected( this.reason )
            } )
        }
    }
}

Promise.race = function( values ){
    return new Promise( ( resolve , reject ) => {
        for( var i = 0 ; i < values.length ; i++ ){
            let current = values[i];
            if( (typeof current === "object" && typeof current !== "null") || typeof current === 'function' ){
                let then = current.then;
                if( typeof then === 'function' ){
                    then.call( current , resolve , reject )
                }else{
                    reject( current )
                }
            }else{
                reject( current )
            }
        }
    } )
}

Promise.all = function(values){
    
}


module.exports = Promise