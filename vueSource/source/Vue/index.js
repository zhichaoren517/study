
import { initState } from "./observe/index"
import Watcher from "./observe/watcher";
import { compiler } from "./util";

function Vue( options ){
    //options 用户传入的原始数据
    this._init( options )//初始化vue
}

Vue.prototype._init = function( options ){
    // this.$options表示的是vue重的参数
    let vm = this ;
    vm.$options = options ;
     
    initState( vm )

    if( vm.$options.el ){
        vm.$mount()
    }
}

function query( el   ){
    if( typeof el === "string" ){
        return document.querySelector( el )
    }
    return el
}




Vue.prototype._update = function(){//渲染视图,拿到标签里面的变量去替换真是数据
    // 用户传入的数据,去更新视图
    let vm = this ; 
    let el = vm.$el ;
    let node = document.createDocumentFragment() ;
    let firstChild ;
    while( firstChild = el.firstChild ){ //每次拿到第一个元素就放在文档碎片里面
        node.appendChild( firstChild ) //appendchild具有剪切移动功能,当前这个元素存在的话就移动到里面
    }
    compiler( node , vm )
    el.appendChild(node)
}

Vue.prototype.$mount = function(){
    let vm = this ;
    let el = vm.$options.el
    el = vm.$el = query(el)
    let updateComponent = ()=> { //更新组件,渲染逻辑
        vm._update()
        
    }
    new Watcher( vm , updateComponent ) //渲染wathcer

}


export default Vue