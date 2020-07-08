
# 三种路由钩子

### 全局钩子
    * 全局前置守卫
        router.beforeEach( ( to , from , next ) => {
            ***导航触发,前置守卫按照创建顺序调用 , 异步解析.此时导航在所有守卫 resolve 完之前一直处于 等待中。***
            ....
        } )
    * 全局后置守卫
        router.afterEach( ( to , from ) => {
            ***不会接收next参数 , 也不会改变导航***
            ...
        } )

### 路由独享的守卫
    const router = new VueRouter({
        routes: [
        {
            path: '/foo',
            component: Foo,
            beforeEnter: (to, from, next) => {
                ...
            }
        }
        ]
    }) 

### 组件内的守卫

const Foo = {
    tempalte:"...",
    beforeRouterEnter( ( to , from , next ) => {
        *** 在渲染该组件的对应路由 被confirm前调用 ***
        *** 不能拿到this,这个时候还没有创建实例 ***
        *** 不能获取组件实例 ***
    } ),
    beforeRouterUpdate( ( to , from , next ) => {
        *** 在当前路由改变 , 但是组件被复用时候调用 ***
        *** 例如:对于一个带有动态参数的路径/foo/:id , 在/foo/1 和 foo/2之间跳转的时候会 ***
        *** 由于会渲染相同的组件 , 所以组件实例会被复用 , 这个钩子会在这种情况下调用 ***
        *** 可以访问到组件实例 ***
    } ),
    beforeRouterLeave( ( to , from , next ) => {
        *** 导航离开该组件对应的路由时候的钩子 ***
        *** 可以访问到实例 ***
    } )
}

# 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。



路由传参数三种方式

params 

{
    path:/one/:id,
    name:"one",
    component:one
}
this.$router.push({
    path:/one/123123
})
    接受
        this.$route.params.id   url显示，数据显示在url，所以这种方式传递数据仅限于一些不那么重要的参数

params

{
    path:/one,
    name:one,
    component:one,
}
this.$router.push({
   name:one
    params:{
        id:12121
    }
})

this.$route.params.id   //参数不显示在url，刷新页面数据消失


query
{
    path:/one,
    name:one,
    component:one,
}

this.$router.push({
    path:/one,
    query:{
        id:12121
    }
})
this.$route.query.id  /参数显示在url上 one?id=1212&&name=asfs