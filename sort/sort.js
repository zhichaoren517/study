let arr = [ 1 , 3 , 8 , 2 , 3 , 5  ]

// 冒泡
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0 ; j < arr.length - i - 1 ; j ++ ) {
            if( arr[j] > arr[j+1] ){
                [ arr[j+1] , arr[j] ] = [ arr[j] , arr[j+1] ]
            }
            
        }
    }
    return arr
}
// 插入
function insertSort( arr ){
    for (let i = 1; i < arr.length; i++) {
        let preIndex = i - 1 ; 
        let current = arr[ i ] ;
        while ( preIndex >= 0 &&  current < arr[ preIndex ] ) {
            arr[ preIndex + 1 ] = arr[ preIndex ] ;
            preIndex --
        };
        arr[ preIndex + 1 ] = current
        
    }
    return arr 
}
//归并排序
function quicklySort(arr){
    if( !Array.isArray(arr) )return arr ;
    if( arr.length < 1 ) return arr;
    let left = [] ,right = [] ;
    let num = Math.floor( arr.length / 2 );
    let numValue = arr.splice( num , 1 )[0]
    for (let i = 0; i < arr.length; i++) {
        if( arr[i] < numValue ){
            left.push( arr[i] )
        }else{
            right.push( arr[i] )
        }
    }
    
    return [...quicklySort(left), numValue, ... quicklySort(right)]
}
// function quickSort(arr, i, j) {
//     if(i < j) {
//       let left = i;
//       let right = j;
//       let pivot = arr[left];
//       while(i < j) {
//         while(arr[j] >= pivot && i < j) {  // 从后往前找比基准小的数
//           j--;
//         }
//         if(i < j) {
//           arr[i++] = arr[j];
//         }
//         while(arr[i] <= pivot && i < j) {  // 从前往后找比基准大的数
//           i++;
//         }
//         if(i < j) {
//           arr[j--] = arr[i];
//         }
//       }
//       arr[i] = pivot;
//       quickSort(arr, left, i-1);
//       quickSort(arr, i+1, right);
//       return arr;
//     }
//   }

console.log(quicklySort(arr , 0  , arr.length-1));


