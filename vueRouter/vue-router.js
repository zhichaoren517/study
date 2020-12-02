class HistoryRoute{
    constructor(){
        this.current = null
    }
}
class VueRouter{
    constructor(options){
        this.mode = options.mode || "hash" ;
        this.routes = options.routes || [] ;

        this.routesMap = this.createMap( this.routes )
        // 路由中需要存放当前的路径   需要状态

        this.history = new HistoryRoute;
        this.init(); //开始初始化

    }
    init(){
        if( this.mode == "hash" ){
            // 先判断用户打开时有没有hash 没有就跳转到#/
            location.hash ? "" : location.hash = "/";
            window.addEventListener( 'load' , () => {
                this.history.current = location.hash.slice(1)
            } )
            window.addEventListener( "hashchange" , ()=>{
                this.history.current = location.slice(1)
            } )
        }else{
            location.pathname?"":location.pathname = "/"
            window.addEventListener( "load" , () => {
                this.history.current = location.pathname ;
            } )
            window.addEventListener( "popstate" , () => {
                this.history.current = location.pathname ;
            } )
        }
    }
    createMap(routes){
        return routes.reduce( (memo,current) => {
           return  memo[ current.path ] = current.component
        },{} )
    }
    go(){}
    back(){}
    push(){}
}
VueRouter.install = function(Vue,opt){
    // 每个组件都有this.$router / this.$route

    Vue.mixin({//混合方法
        beforeCreate() {

            // 在所有的组件中获取同一个router实例
            if(  this.$options && this.$options.router ){
                // 只有根组件才传了router选项,所以能走到这的肯定是根组件
                this._root = this ;//把当前实例挂载在_root上
                this._router = this.$options.router
                // 如果history重的current属性变化也会刷新视图
                Vue.util.defineReactive( this ,"xxx", this._router.history  )
            }else{
                this._root = this.$parent._root 
            }
            // 获取组件属性名字
            Object.defineProperty( this , "$router" , {
                get(){
                    return this._root._router
                }
            } )
            Object.defineProperty( this , "$route" , {
                get(){
                    return {
                        // 当前路由所在的状态
                        current:this._root._router.history.current
                    }
                }
            } )
        },
    });
    Vue.Component( 'router-link',{
        props:{
            to:String,
            tag:String
        },
        methods:{
            handleClick(){
                // if( )
            }
        },
        render(h){
            let mode = this._self._root._router.mode
            let tag = this.tag
            // 深度渲染
            return <tag on-click={ this.handleClick } href={ mode == 'hash' ? `#${this.to}` : this.to }>{ this.$slots.default }</tag>
        }
    } )
    Vue.Component( 'router-view',{ // 根据当前的状态current 路由表
        render(h){
            let current = this._self._root._router.history.current
            let routeMap = this._self._root._router.routesMap
            return h(routeMap[ current ])
        }
    } )
}
export default VueRouter