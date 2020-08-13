

class BinaryTreeNode{
    constructor( value ){

        // this.key = key ;

        this.value = value ;

        this.parentNode = null ;
        
        this.left = null;

        this.right = null ;

    }
}

class BinaryTree{
    constructor(){
        this.root = null ;
    }
    static createTreeNode(value){
        return new BinaryTreeNode( value )
    }
    static insertNode( node , newNode ){
        if( newNode.value < node.value ){
            if( !node.left ){
                node.left = newNode ;
                newNode.parentNode = node;
                // newNode.parentNode = JSON.parse( JSON.stringify( node )) ;
                // newNode.parentNode.left = null
                // newNode.parentNode.right = null
                return ;
            }
            BinaryTree.insertNode( node.left , newNode )
        }else{
            if( !node.right ){
                node.right = newNode ;
                newNode.parentNode = node;
                // newNode.parentNode = JSON.parse( JSON.stringify( node )) ;
                // newNode.parentNode.right = null
                // newNode.parentNode.left = null
                return ;
            }
            BinaryTree.insertNode( node.right , newNode ) 
        }
    }
    // 插入节点
    insert( ...node ){
        [...node].forEach( n => {
            const newNode = n instanceof BinaryTreeNode ? n : BinaryTree.createTreeNode(n) ;
            if( !this.root ){
                this.root = newNode ;
            }else{
                BinaryTree.insertNode( this.root , newNode )
            }
        } )
        
        return this.root
    }
    // 寻找足最小值
    getMin( root ){
        let min ;
        if( root ){
            let node = root
            while( node.left ){
                min = node.left.value ;
                node = node.left
            }
            return node 
        }
        return new Error( "Empty" ) ;
    }
    getMax(){
        let max;
        if( this.root ){
            let node = this.root;
            while( node.right ){
                max = node.right.value ;
                node = node.right
            }
            return node 
        }
        return new Error( "Empty" ) ;
    }
    findData(node){
        if( this.root ){
            let curNode = this.root
            while( curNode && curNode.value != null  ){
                if( node < curNode.value ){
                    curNode = curNode.left;
                    continue;
                }
                if( node > curNode.value ){
                    curNode = curNode.right;
                    continue;
                }
                if( node == curNode.value ){
                    return curNode
                }
                
            }
            return new Error( "Empty" ) ;
        }
    }
    // removeNode(node){
    //     if( !this.root ) return null ;
    //     let leftNode , rightNode;
    //     var curNode = this.root ;
    //     while( curNode && curNode.value != null  ){
    //         if( node < curNode.value ){
    //             curNode = curNode.left;
    //             continue;
    //         }
    //         if( node > curNode.value ){
    //             curNode = curNode.right;
    //             continue;
    //         }
    //         if( node == curNode.value ){
    //             if( curNode.left == null && curNode.right == null ){
    //                 curNode = null;
    //                 return this.root
    //             }
    //             // leftNode = JSON.parse( JSON.stringify( curNode.left  ) )
    //             // return curNode
    //         }
            
    //     }
    //     return this.root
    // }
    removeNode(root , node ){
        if( !root ) return null ;
        if( node < root.value ) {
            root.left = this.removeNode( root.left , node );
            return root
        }
        if( node > root.value ){
           root.right = this.removeNode( root.right , node );
           return root
        }
        if( node == root.value ){
            if( root.left == null && root.right == null ){
                return  null
            }
            if( root.left && root.right == null ){
                return root.left
            }
            if( root.right && root.left == null ){
                return root.right
            }
            if( root.right && root.left ){
                let minNode = this.getMin( root.right )
                root.value = minNode.value ;
                root.right = this.removeNode( root.right , minNode )
                return root
            }
        }
    }

	/**
	 * [_removeNode 移除节点递归]
	 * @param  {[BinaryNode]} node [当前节点]
	 * @param  {[*]} val  [要移的除节点值]
	 * @return {[BinaryNode]}      [当前节点]
	 */
	// _removeNode(node, data) {
    //     const removeNode = (node,value) => {
    //         if(node === null) return null;
    //         if(node.value === value){
    //             if(node.left === null && node.right === null) return null;
    //             if(node.left === null) return node.right;
    //             if(node.right === null) return node.left;
    //             if(node.left !==null && node.right !==null){
    //             let _node = this.getMin(node.right);
    //             node.value = _node.value;
    //             node.right = removeNode(node.right,value);
    //             return node
    //             }
    //         } else if(value < node.value){
    //             node.left=removeNode(node.left,value);
    //             return node
    //         } else {
    //             node.right=removeNode(node.right,value);
    //             return node
    //         }
    //     };
    //     return removeNode(this.root,data)
    // }
    /**
     *[ inorderTraverse 中序遍历 ]
     * @param {[ BinaryTree ]} root [ 树 ]
    */
    inOrderTraverse( root ){
        let result = [];
        if( root ){
            this._inOrderTraverseNode(  )
        }
    }
    _inOrderTraverseNode(){

    }
}

let bt = new BinaryTree()
bt.insert( 100 , 50 , 200 , 30 , 90 , 150 , 300 , 15 , 40 , 80 , 120 , 140 , 180 , 250 , 400 )

console.log(bt.removeNode( bt.root , 300));
console.log(bt.root);






