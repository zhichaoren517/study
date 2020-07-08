let obj1 = {
    el:"div",//对真实节点的引用
    targetName:"DIV",//节点标签
    sel:"div#v.classA",
    data:null,//一个存储节点属性的对象，对应节点的el[prop]属性，
    children:[],
    text:null,
}
let obj2 = {
    el:"span",//对真实节点的引用
    targetName:"DIV",//节点标签
    sel:"div#v.classA",
    data:null,//一个存储节点属性的对象，对应节点的el[prop]属性，
    children:[],
    text:null,
}
const el = obj1.el = obj2.el
console.log(el);

console.log(obj1);
console.log(obj2);

// updateChildren (parentElm, oldCh, newCh) {
//     let oldStartIdx = 0;
//     let newStartIdx = 0
//     let oldEndIdx = oldCh.length - 1; //真实节点最后一个子节点的索引
//     let oldStartVnode = oldCh[0] //真实节点的第一个子节点
//     let oldEndVnode = oldCh[oldEndIdx] //真实节点的最后一个子节点
//     let newEndIdx = newCh.length - 1 //新节点的最后一个节点索引
//     let newStartVnode = newCh[0]//新节点的第一个子节点
//     let newEndVnode = newCh[newEndIdx]//新节点的最后一个节点
//     let oldKeyToIdx
//     let idxInOld
//     let elmToMove
//     let before
//     while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
//             if (oldStartVnode == null) {   //对于vnode.key的比较，会把oldVnode = null
//                 oldStartVnode = oldCh[++oldStartIdx] 
//             }else if (oldEndVnode == null) {
//                 oldEndVnode = oldCh[--oldEndIdx]
//             }else if (newStartVnode == null) {
//                 newStartVnode = newCh[++newStartIdx]
//             }else if (newEndVnode == null) {
//                 newEndVnode = newCh[--newEndIdx]
//             }else if (sameVnode(oldStartVnode, newStartVnode)) {
//                 patchVnode(oldStartVnode, newStartVnode)
//                 oldStartVnode = oldCh[++oldStartIdx]
//                 newStartVnode = newCh[++newStartIdx]
//             }else if (sameVnode(oldEndVnode, newEndVnode)) {
//                 patchVnode(oldEndVnode, newEndVnode)
//                 oldEndVnode = oldCh[--oldEndIdx]
//                 newEndVnode = newCh[--newEndIdx]
//             }else if (sameVnode(oldStartVnode, newEndVnode)) {
//                 patchVnode(oldStartVnode, newEndVnode)
//                 api.insertBefore(parentElm, oldStartVnode.el, api.nextSibling(oldEndVnode.el))
//                 oldStartVnode = oldCh[++oldStartIdx]
//                 newEndVnode = newCh[--newEndIdx]
//             }else if (sameVnode(oldEndVnode, newStartVnode)) {
//                 patchVnode(oldEndVnode, newStartVnode)
//                 api.insertBefore(parentElm, oldEndVnode.el, oldStartVnode.el)
//                 oldEndVnode = oldCh[--oldEndIdx]
//                 newStartVnode = newCh[++newStartIdx]
//             }else {
//                // 使用key时的比较
//                 if (oldKeyToIdx === undefined) {
//                     oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) // 有key生成index表
//                 }
//                 idxInOld = oldKeyToIdx[newStartVnode.key]
//                 if (!idxInOld) {
//                     api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
//                     newStartVnode = newCh[++newStartIdx]
//                 }
//                 else {
//                     elmToMove = oldCh[idxInOld]
//                     if (elmToMove.sel !== newStartVnode.sel) {
//                         api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
//                     }else {
//                         patchVnode(elmToMove, newStartVnode)
//                         oldCh[idxInOld] = null
//                         api.insertBefore(parentElm, elmToMove.el, oldStartVnode.el)
//                     }
//                     newStartVnode = newCh[++newStartIdx]
//                 }
//             }
//         }
//         if (oldStartIdx > oldEndIdx) {
//             before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].el
//             addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx)
//         }else if (newStartIdx > newEndIdx) {
//             removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
//         }
// }