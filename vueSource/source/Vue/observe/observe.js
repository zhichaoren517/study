import { observe } from "./index";
import { arrayMethods , observeArray } from "./array"
import Dep from "./dep";


export function defineReactive( data , key , value ){
    observe( value )
    // 相同的属性用的是相同的dep
    let dep = new Dep()
    Object.defineProperty( data , key , {
        get(){
            if( Dep.target ){//只要对这个睡醒进行了取值操作,就会将当前的watcher存进去
                // 我们希望存入的watcher不能重复,如果重复会造成多次渲染 
                dep.depend() // 他想让dep中可以存放watcher,也想让watcher中存入dep
            }
            console.log("获取数据" , key);
            return value
        },
        set( newValue ){
            if( value === newValue ) return ;
            observe( newValue )//如果newValue是一个对象,需要监控这个对象,前提是newValue的key或者key的父级在this上已经定义过
            console.log("设置数据" , key );
            value = newValue
            dep.notify()
        }
    } )
}

class Observe{
    constructor( data ){ //data就是vm._data
        // 使用defineProperty重新定义
        if( Array.isArray( data ) ){    
            //需要重写数组的方法
            data.__proto__ = arrayMethods
            observeArray( data )
        }else{
            this.walk( data )

        }
    }
    walk( data ){
        let keys = Object.keys( data )
        for (let i = 0; i < keys.length; i++) {
            let key = keys[ i ];
            let value = data[ key ]
            // 对每个属性重新定义
            defineReactive( data , key , value  )
            
        }   
    }
}

export default Observe