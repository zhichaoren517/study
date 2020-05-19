//观察者模式
class Subject{
    constructor(name){
        this.name = name , 
        this.state = "睡着了",
        this.observe = []
    }
    attach( ...observe ){
        console.log(...observe);
        
        this.observe.push( ...observe )
    }
    setState(state){
        this.state = state
        this.observe.forEach( o => o.update(state) )
    }
}
class Observe{
    constructor(name){
        this.name = name
    }
    update( state ){
        console.log( this.name + "说:bb" + state );
    }
}
let father = new Observe("爸爸",'爸');
let mather = new Observe("妈妈");
let bb = new Subject( "bb" )
bb.attach( father,mather )
// bb.attach( mather )
bb.setState("饿哭了")