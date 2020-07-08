
function fn(num) {
    let n = num.toString()
    let rn = num.toString().split('').reverse().join('')
    
    
    return n === rn
    
}

console.log( fn(12) );
