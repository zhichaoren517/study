function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);



let list:number[] = [ 1,2,3 ];
let map:Array<number> = [4,5,6]

// 元组 Tuple
let x:[ string,number ] = [ "!",1 ]
// let y:[ string,number ] = [ 1,"23" ] //error

enum color {
    red = 2,
    freen,
    blue = 7
} 

let c:string = color[3];
console.log(c);

let any:any = false

let anyList:any[] = [ 1,false,"1",{ b:2 } ]

console.log(anyList);

function warnUser():void{
    console.log("aaaa")
}
let a = warnUser()
console.log(a);


