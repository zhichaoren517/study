// 发布订阅

function Events(){
    this.results = [] ;
    this.callBack = [] ;
}

Events.prototype.on = function( module , cb ){
    this.callBack.push( {
        module:module,
        cb:cb
    } )
}
Events.prototype.emit = function( module , data ){
    this.results.push( {
        module : module,
        data:data
    } )
    this.callBack.forEach( item => ( item.module == module ) && item.cb( this.results.find( ( i => i.module ==  module ) ).data ) )
}

let eventBus = new Events()

eventBus.on( 'console' , ( res ) => {
    console.log(res,'res');
} )
setTimeout( () => {
    eventBus.emit( 'console' , "这是一个console" )
} , 1000)



// 观察者

class Subject{
    constructor( name ){
        this.state = "睡觉ing...";
        this.name = name ;
        this.observe = [] ;
    }
    addObserve(...observe){
        this.observe.push( ...observe )
    }
    setState( state ){
        this.state = state ;
        this.observe.forEach( item => {
            item.update( state )
        } )
    }
}

class Observe{
    constructor( name ){
        this.name = name;
    }
    update( mes ){
        console.log( this.name + '说bb:' + mes )
    }
}

let fa = new Observe( "father" )
let ma = new Observe( "mather" )
let baby = new Subject( "baby" )
baby.addObserve( fa , ma )
baby.setState( "哭啦哭啦" )