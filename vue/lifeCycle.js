
beforeCreate // 初始化自己的生命周期(儿子有几个,爸爸有几个,并非vue的生命周期) , 并且绑定自己的事件

created // 可以获取数据和调用方法

beforeMounte // 第一次调用渲染函数之前 render el拿不到

mounted // 获取真实dom  页面已经渲染完了

beforeUpdate  // 更新前 数据修改后渲染前调用的钩子

updated // 更新后,不操作数据,会导致死循环

beforeDestory // 当前是实例还可以用 

destoryed // 实例上所有的方法监听 都被移除  ( 路由切换,手动销毁 )

this.$listeners //所有v-on绑定的事件都会放在上面

v-slot:test === #test
// 指令和过滤器函数的this都是window
props 属性
    type:String
    validator(value){
    return 
    }

    directive('split' , function(el ,bindings,vnode))

    directive('split' , {
        bind(el ,bindings,vnode){
            // 只在用户绑定指令时生效   指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        },
        inserted(){
            // dom渲染完后执行
            // inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
        }
    })