import { pushTarget, popTarget } from "./dep";

let id = 0 ;

class Watcher{
    /**
     * @param {*} vm  当前组件的实例 , new vue
     * @param {*} exprOrFn 用户可能传入的表达式,也有可能传入一个函数
     * @param {*} cb 用户传入的回调函数
     * @param {*} opts //其他参数
     */
    constructor( vm , exprOrFn , cb=()=>{} , opts={} ){
        this.vm = vm ;
        this.exprOrFn = exprOrFn ;
        if( typeof exprOrFn === "function" ){
            this.getter = exprOrFn
        } ;
        this.deps = [] ;
        this.depsId = new Set();
        this.cb = cb ;
        this.opts = opts ;
        this.id = id ++ ;
        this.get()
    }
    get(){
        pushTarget(this);
        this.getter();
        popTarget()
    }
    update(){
        this.get()
    }
    addDep(dep){//同一个watcher不应该重复记录dep
        let id = dep.id;
        if( !this.depsId.has( id ) ){
            this.depsId.add( id );
            this.deps.push( dep )
            dep.addSub(this)
        }
    }
}


export default Watcher