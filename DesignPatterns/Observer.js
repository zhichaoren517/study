class Subject{
    constructor(name){
        this.name = name ;
        this.state = "sleep";
        this.observes = [] ;
    }
    getState(){
        return this.state
    }
    setState( state ){
        this.state = state ; 
        this.observes.forEach( o => o.update( state ) ) ;
    }
    attach( ...observe ){
        console.log(...observe);
        
        this.observes.push( ...observe )
    }
}

class Observe{
    constructor( sub , name ){
        this.name = name ;
        this.sub = sub
    }
    update(state){
        console.log( this.sub.name + ":" + state )
    }
}

var s = new Subject('bb') ;
var f = new Observe( s , 'ff' );
var m = new Observe( s , 'mm' )
s.attach(f)
s.attach(m)

s.setState('crying')
