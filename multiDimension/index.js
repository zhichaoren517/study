let mockData = require("./mock")


class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.id = value._id
        this.parentPath = value.dim_parent_path
        this.parentId = value.dim_parent_id
        this.isVirtual = value.isVirtual
        this.children = [];
    }
}
class BinaryTree {
    constructor() {
        this.root = []
    }
    // 创建真实节点
    createTreeNode(node) {
        node.isVirtual = false;
        return new BinaryTreeNode(node)
    }
    // 创建虚拟节点
    createVirtualTreeNode(id) {
        let node = {};
        node.isVirtual = true
        node._id = id
        return new BinaryTreeNode(node)
    }
    insertNode(node) {
        if( this.isRootNode( node ) ){
            // 如果是根结点，
            let rootNode = this.root.find( r => r.id == node.id );
            if( rootNode ){
                // 如果这个根节点存在但是是虚拟节点 ,那么替换掉
                if( rootNode.isVirtual ){
                    this.replaceVnode( rootNode , node );
                    return 
                }
                //不是虚拟节点
                if( !rootNode.isVirtual ){
                    return
                }
            }
            if( !rootNode ){
                //如果这个根节点不存在 , push进去
                root.push( node )
                return ;
            }
        }
        this.createTree(this.root , node)

    }
    replaceVnode( vNode , node ){
        node.children = vNode.children
        return Object.assign( vNode , node )
    }
    isRootNode(node){
        if( !node.parentPath && !node.parentId ){
            return true
        }
        return false
    }
    haveRootNode(node){
        return this.root.find( r => r.id == node.id )
    }
    createTree( root , node ){
        let pPath = node.parentPath.split('.');//2,1003,1005
        let rootNode = root.find( r => r.id == pPath[0] )
        // 如果根节点不存在
        if( !rootNode ){
            // 如果没有根节点,创建一个虚拟根节点
            rootNode = this.createVirtualTreeNode( pPath[0] ) 
            root.push( rootNode )
            // 如果当前节点是跟节点的子节点
            if( node.parentId == rootNode.id ){
                this.insertChildrenNodeToParentNode( rootNode , node )
                return
            }
            // 如果不是根节点的子节点
            let parentNode = rootNode;
            for (let i = 1; i < pPath.length; i++) {
                if( node.parentId == parentNode.id ){
                    parentNode.children.push( node );
                    return
                }
                let vNode = this.createVirtualTreeNode( pPath[i] )
                parentNode.children.push( vNode )
                parentNode = vNode
            }
            return
        }
        // 如果根节点存在
        if( rootNode ){
            if( node.parentId == rootNode.id ){
                this.insertChildrenNodeToParentNode( rootNode , node )
                return
            }
            for (let i = 1; i < pPath.length; i++) {
                let sonNode = rootNode.children.find( child => child.id == pPath[i] )
                if( !sonNode ){
                    let vNode = this.createVirtualTreeNode( pPath[i] )
                    rootNode.children.push( vNode )
                    rootNode = vNode
                }else{
                    rootNode = sonNode
                }
                if( node.parentId == rootNode.id ){
                    this.insertChildrenNodeToParentNode( rootNode , node )
                }
            }

        }
        
    } 
    init(nodes) {
        if (!Array.isArray(nodes)) throw new TypeError('arguments must be an Array');
        if (!nodes.length) throw new Error("Empty Array")
        nodes.forEach(node => {
            const newNode = node instanceof BinaryTreeNode ? node : this.createTreeNode(node);
            this.insertNode(newNode)
        })
    }
    remove() {

    }
    // 根据nodeId查找节点
    findNodeByNodeId(root, nodeId) {
        if (!nodeId) throw new Error("No query conditions")
        if (root.id == nodeId) return root;
        if (!root.children) throw new Error(`${root.desc} not children`)
        for (let i = 0; i < root.children.length; i++) {
            let tnode = this.findNodeByNodeId(root.children[i], nodeId);
            if( tnode ) return tnode;
        }
    }
    // 根据nodepath查找节点
    findNodeByNodePath(root, nodePath) {
        let nPath = nodePath.split('.');//2,1003,1005
        if( nPath[0] != root.id ) return false;
        if (!root.children) throw new Error(`${root.desc} not children`);
        // 切掉根节点id
        nPath = nPath.slice(1)
        let targetNode = root ;
        // 循环nodepath 根据i 节点一级一级往下找目标节点
        for (let i = 0; i < nPath.length; i++) {
            if( nPath[i] == targetNode.id ) return ;
            targetNode = this.findChildren( targetNode , nPath[i] )
        }
        return targetNode

    }
    // 查找父节点下的某个子节点
    findChildren( fatherNode , childrenId ){
        return fatherNode.children.find( node => node.id == childrenId )
    }
    //在父节点下插入一个子节点
    insertChildrenNodeToParentNode(parentNode,childrenNode){
        let cNode = parentNode.children.find( c => c.id == childrenNode.id )
        cNode ? (childrenNode.children = cNode.children) && Object.assign( cNode , childrenNode ) : parentNode.children.push( childrenNode )
    }
    getAllNode() {
        return this.root
    }
}

let b = new BinaryTree()
b.init(mockData)
