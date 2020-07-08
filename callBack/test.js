// subject是主题
class Subject{
    constructor(){
        this.state = 0;
        this.observers = [] ;
    }
    attach( observer ){
        this.observers.push( observer )
    }
    setState( state ){
        this.state = state ;
        this.notifyObserver()
    }
    getState(){
        return this.state
    }
    notifyObserver(){
        this.observers.forEach( o => {
            o.update()
        } )
    }
}
// 一般来说,会创建多个观察者
class Observe{
    constructor( name , subject ){
        this.name = name ;
        this.subject = subject ;
        this.subject.attach( this )
    }
    update(){
        console.log( `${ this.name } update, state: ${ this.subject.getState() }` )
    }
}
var s = new Subject()
var o1 = new Observe( 'o1' , s )
s.setState('hahaha')



// 发布/订阅


class Eventv{
    constructor(){
        this.clientList = [] ;
    }
    listen( key , fn ){
        let fns = this.clientList[ key ] ; 
        if( !fns ){
            this.clientList[ key ] = []
        }
        this.clientList[ key ].push( fn )
    }
    trigger( key , msg ){
        let fns = this.clientList[ key ];
        if( !fns || fns.length === 0 ){
            return false
        }
        fns.forEach( fn => fn( msg ) )
    }
    once( key , fn ){
        let _this = this
        function on() {
            _this.remove( key , on )
            fn.apply( this , arguments )
        }
        on.fn = fn
        this.listen( key , on )
    }
    remove( key , fn ){
        let  fns = this.clientList[ key ] ;
        if( !fns ){
            return false
        }
        if( !fn ){
            fns.length = 0
        }else{
            fns.forEach( ( _fn , index ) => {
                if( _fn === fn ){
                    fns.splice( index ,  1 )
                }
            } )
        }
    }   
}
var a = function ( msg ) {
    console.log( msg )
}
let e = new Eventv()
e.once( 'say' , a )
e.remove( 'say' , a )
e.trigger( "say" , 'hahahaha' )
e.trigger( "say" , 'gegegege' )