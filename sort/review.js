let arr = [ 1 , 3 , 8 , 2 , 3 , 5  ]
// 冒泡
function bubleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if( arr[j] > arr[j+1] ){
                [ arr[j+1] , arr[j] ] = [ arr[j] , arr[j+1] ]
            }
        }
        
    }
    return arr
}

function bubleSort( arr ){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if( arr[j]> arr[j+1]){
                [ arr[j+1] , arr[j]] = [ arr[j] , arr[j+1] ]
            }
        }
    }
    return arr
}

function mergeSort( arr ){
    if( !Array.isArray( arr ) ) return arr ;
    if( arr.length<=1 ) return arr ;
    let left = [] , right = [] ;
    let num = Math.floor( arr.length/2 );
    let numValue = arr.splice( num , 1 )[0];
    for (let i = 0; i < arr.length; i++) {
       if( arr[i] < numValue ){
           left.push( arr[i] )
       }else{
           right.push( arr[i] )
       }
    }
    return [ ...mergeSort( left ) , numValue , ...mergeSort( right ) ]
}
console.log(mergeSort(arr));



function mergSort( arr ){
    if( !Array.isArray( arr ) ) return arr ;
    if( arr.length <= 1 ) return arr ;
    let left = [] , right = [] ;
    let num = Math.floor( arr.length / 2 ) ;
    let numValue = arr.splice( num , 1 )[0];
    for (let i = 0; i < arr.length; i++) {
        if( arr[i] < numValue ){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [ ...mergeSort(left) , numValue , ...mergeSort(right) ]
}