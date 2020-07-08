let arr = [ 'flower' , 'flow' , 'flight' ]

function fn( arr ){
    let s = arr[0].split('')
    let t = [];
    let l = 0
    for (let i = 0; i < s.length; i++) {
        let tMap = []
        for (let j = 1; j < arr.length; j++) {
            let arrI = arr[j].split('')[i]
            if( s[i] === arrI ){
                tMap.push( true )
            }else{
                tMap.push( false )
            }
        }
       t.push( tMap.every( item => item && item == tMap[0] ) )
       
    }
    for (let i = 0; i < t.length; i++) {
        if( t[i] ){
            l += 1
        }else{
            break
        }
    }
    console.log(s.slice( 0 , l ).join('') );
    return s.slice( 0 , l ).join('') || ''
    
}
fn( arr )
