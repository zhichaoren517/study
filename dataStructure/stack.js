
class Stack{
    // 特点 , 先入后出
    constructor(){
        this.dataStore = [] ;
        this.top = 0 ; //记录栈顶位置,初始为0
    }
    //入栈
    push( element ){
        this.dataStore[ this.top ++  ] = element ;
        return this.dataStore
    }
    //出栈, 返回栈顶元素
    pop(){
        return this.dataStore[ -- this.top ]
    }
    // 查看栈顶元素
    peek(){
        if( this.top > 0 ){
            return this.dataStore[ this.top - 1 ]
        }
        return "empty"
    }
    // 查看栈长度
    length(){
        return this.top
    }
    // 清空栈
    clear(){
        delete this.dataStore ;
        this.dataStore = [] ;
        this.top = 0 ;
        return this.dataStore
    }
}

let stack = new Stack()
console.log( stack.length() );
console.log( stack.push(3) );
console.log( stack.push(4) );
console.log( stack.push(5) );
console.log( stack.length() );
console.log( stack.peek() );
console.log( stack.clear() );

// 案例1：实现数制间的相互转换

// 我们可以利用栈将一个数字从一种数制转换成另一种数制。例如将数字 n 转换成以 b 为基数的数字，可以采用如下算法（该算法只针对基数为 2-9 的情况）：

// 最高位为 n % b ， 直接压入栈;
// 使用 n / b 来代替 n ;
// 重复上面的步骤，知道 n 为 0 ，并且没有余数；
// 以此将栈内元素弹出，直到栈空，并依次将这些元素排列，就得到了转换后的形式
//进制转换（2-9）

// function mulBase ( num , base ) {
//     var s = new Stack();
//     do{
//         s.push( num % base );
//         num = Math.floor( num /= base );
//     }while ( num > 0 );

//     var converted = '';
//     while (s.length() > 0){
//         converted += s.pop();
//     }
//     return converted;
// }

// console.log( mulBase( 125 , 2 ) );      // 1111101
// console.log( mulBase( 125 , 8 ) );      // 175










// 案列2：判断一个字符串是不是回文
// 回文是指一个字符串，从前往后写和从后往前写结果都是一样的，比如单词 'level' ， 'racecar'，就是回文，数字 1001 也是回文。
// 我们采用栈，可以很轻松判断一个字符串是否是回文，实现算法很简单，相信你们都猜到了。我们把字符串从左到右依次压入栈，这样，栈中保存了该字符串反转后的字符，我们再依次出栈，通过比较出栈后的字符串是否与原字符串是否相等，就可判断该字符串是否是回文

//回文判断

// function isPalindrome ( word ) {
//     var s = new Stack();
//     for( var i = 0 ; i < word.length ; i ++ ){
//         s.push( word[i] );
//     }
//     var rword = '';
//     while( s.length() > 0 ){
//         rword += s.pop();
//     }

//     if( word == rword ){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log( isPalindrome('level') )    // true
// console.log( isPalindrome('1001') )     // true
// console.log( isPalindrome('word') )     // false