function aa(exe){
    let resolve = (res) => { console.log(res) }
    let reason = (rea) => { console.log(rea) }
    let x = exe( resolve , reason )
    console.log( "x" , x )
}
function bb(){
    aa( ( x , y ) => {
        console.log("con" , x)
    } )
}
bb()