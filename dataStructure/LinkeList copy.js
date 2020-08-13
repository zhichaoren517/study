class Node{
    constructor( element ){
        this.element = element ;
        this.next = null ;
        this.previous = null;
    }
}
class LinkedList{
    constructor(){
        this.head = new Node('head') ;
        // this.find = find;                   //查找节点
        // this.insert = insert;               //插入节点
        // this.remove = remove;               //删除节点
        // this.findPrev = findPrev;           //查找前一个节点
        // this.display = display;             //显示链表
    }
    append( newEle ){
        let newNode = new Node( newEle )
        let currNode = this.head ;
        while( currNode.next ){
            currNode = currNode.next
        }
        currNode.next = newNode ;
        newNode.previous = currNode

        return newNode
    }
    insert( newEle , targetEle ){
        if( !ele ){
            this.append( newEle ) ;
        }
        let newNode = new Node( newEle )
        let targetNode = this.find( targetEle ) ;
        let targetNodePre = targetNode.previous ;
        targetNodePre.next = newNode;

        newNode.previous = targetNodePre ;
        newNode.next = targetNode.previous ;

        targetNode.previous = newNode ;


    }
    find(item){
        let currNode = this.head ;
        while( currNode.element != item ){
            currNode = currNode.next
        }
        return currNode
    }
    findPre(item){
        let currNode = this.find(item)
        return currNode.previous
    }
    findNext(item){
        let currNode = this.find(item)
        return currNode.next
    }
    remove(item){
        if( !item ) return ;
        debugger
        let preNode = this.findPre( item ) ;
        let nextNode = this.findNext( item ) ;
        let tarNode = this.find(item) ;
        if( nextNode ){
            nextNode.previous = preNode ;
        }
        preNode.next = nextNode ;
        tarNode.previous = null ;
        tarNode.next = null;

    }
    display(){
        let currNode = this.head ;
        while( currNode.next != null ){
            console.log( currNode.next );
            currNode = currNode.next
        }
    }
}

var ll = new LinkedList()
ll.append('5')
ll.append('4')
ll.append('3')
ll.append('2')

ll.remove('3')
ll.display()

