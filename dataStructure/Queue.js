class Queue{
    constructor(){
        this.dataStore = [] ;
    }
    // 入队
    enQueue( element ){
        this.dataStore.push( element )
    }
    // 出队
    deQueue(){
        if( !this.dataStore.length ) return 'Empty'
        this.dataStore.shift()
    } 
    // 查看队列第一个元素
    front(){
        return this.dataStore[0]
    }
    // 查看队列最后一个元素
    back(){
        return this.dataStore[ this.dataStore.length - 1 ]
    }
    // 显示队列
    toString(){
        return this.dataStore.join('\n')
    }
    // 清空队列
    empty(){
        this.dataStore.length = 0 ;
        return this.dataStore
    }
}

let queue = new Queue()
queue.enQueue(1) 
queue.enQueue(2) 
queue.enQueue(3) 
queue.enQueue(4) 
// console.log( queue.front() );
// console.log( queue.back() );
queue.deQueue()

console.log( queue.toString() );


// https://www.jianshu.com/p/1157aaccad36