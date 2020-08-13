
let id = 0 ;

class Dep{
    constructor(){
        this.id = id ++ ;
        this.subs = []
    }
    addSub(watcher){
        this.subs.push(watcher)
    }
    notify(){
        this.subs.forEach( watcher => watcher.update() )
    }
    depend(){
        // 为了防止直接调用depend方法,先判断一下
        if( Dep.target ){
            //  Dep.target是一个渲染watcher
            Dep.target.addDep(this)
        }
    }
}

let stack = [] ;
export function pushTarget( watcher ){
    Dep.target = watcher ;
    stack.push( watcher )
}
export function popTarget(){
    stack.pop();
    Dep.target = stack[ stack.length - 1 ]

}

export default Dep