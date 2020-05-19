
let obj = {
    // AccountObj:[
    //     {
    //         ResourcesId: "5ea68662fa887500018d59e2",
    //         source: 102,
    //     },
    //     {
    //         ResourcesId: "5ea68662fa887500018d59e2",
    //         source: 102,
    //     },

    // ],
    // ContactObj:[
    //     {
    //         ResourcesId: "5ea6817bfa887500018ca392",
    //         source: 103,
    //     }
    // ]
}
// function parse(){
//     let arr = Object.keys(obj)
//     let brr = arr.reduce( ( pre , cur , index ) => {
//         console.log(pre,cur,'1');
//         return [ ...getObj( obj , pre ) , ...getObj( obj , cur ) ]
//     } )
//     console.log(brr);
// }
// function getObj( target , key ){
//     return target[key] && target[key].map( o => 
//         ({
//             apiName:key,
//             objectId:o.ResourcesId
//         })
//     )
// }
// }
function parse(){
    let arr = [];
    Object.keys( obj ).forEach( o => {
        arr = arr.concat(obj[o].map( d => {
            return {
                apiName:o,
                objectId:d.ResourcesId
            }
        } ))
    } )
    console.log(arr);
}

parse()