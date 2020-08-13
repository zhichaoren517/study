


//?:匹配不捕获
//+至少一个
//?尽可能匹配
const detaultREG = /\{\{((?:.|\r?\n)+?)\}\}/g;
export const util = {
    getValue( vm , expr ){
        let keys = expr.split(".")
        return keys.reduce( ( memo , current ) =>{
            return memo = memo[current]
        } , vm )
    },
    compilerText( node , vm ){
        node.textContent = node.textContent.replace( detaultREG , function(...arg){
            return util.getValue( vm , arg[1] )
        } )
        
    }
}
export function compiler( node , vm ){
    let childNodes = node.childNodes ;
    [ ...childNodes ].forEach( child=>{
        if( child.nodeType === 1 ){  // 1、元素  3、文本
            compiler( child , vm )
        }else if( child.nodeType === 3 ){ //代表是文本类型
            util.compilerText( child , vm )
        }
    } )
    
}