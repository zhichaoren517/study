
class Event{
    constructor(){
        this.handlers = []
    }
    on( key , fn ){
        if( !this.handlers[key] ){
            this.handlers[key] = []
        }
        this.handlers[key].push(fn)
    }
    trigger(key , ...arg){
        let fns = this.handlers[key] ;

        if( !fns || fns.length == 0 ){
            return 'Empty'
        }
        
        fns.forEach( fn => {
            fn( ...arg )
        });
    }
    remove(key , fn){
        let fns = this.handlers[key];
        if(!fns ){
            return false
        }
        if( !fn ){
            fns && (fns.length = 0)
        }else{
            fns.forEach( ( _fn, index ) => {
                if( _fn == fn ){
                    fns.splice( index , 1 )
                }
            } )
        }
    }
    once( key , fn ){
        let _this = this
        function _on(){
            fn.call(this , ...arguments);
            _this.remove(key,_on)
        }
        // _on.cb = fn
        this.on( key , _on )
    }
}
let event = new Event()
function log1(a){
    console.log(a)
}
// event.on( 'log1' , log1 )
event.once( 'log1',log1 )
event.trigger('log1' , 'haha' , 'xixi')
// event.remove('log1',log1)
event.trigger('log1' , 'haha' , 'xixi')
