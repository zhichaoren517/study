# 对象的属性分为

* 1、访问器属性 有以下描述符可操作( configurable , enumerable , get , set )
* 2、数据属性 有以下描述符可操作( configurable , enumerable , writable , value )


## 定义属性的方法有

### 定义单个属性
* 1、Object.defineProperty( object , property(String) , {
        configurable:true or false
        ...
    } )
### 定义多个属性
* 2、Object.defineProperties( object , {
        property1:{
            configurable:true or false
            ...
        },
        property2:{
            get:function(){},
            set:function(){}
            ...
        }
    } )
## 读取对象属性的描述符
    Object.getOwnPropertyDescriptor( object(目标对象) , property(目标属性))  读取对象属性的描述符


<!-- *史蒂夫可能你看*
**看就看**
***看就看***
_健康就好_
__健康就好__
___健康就好___
`<hjh>`
#```
@Override
object
#``` -->