function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
var list = [1, 2, 3];
var map = [4, 5, 6];
// 元组 Tuple
var x = ["!", 1];
// let y:[ string,number ] = [ 1,"23" ] //error
var color;
(function (color) {
    color[color["red"] = 2] = "red";
    color[color["freen"] = 3] = "freen";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
var c = color[3];
console.log(c);
var any = false;
var anyList = [1, false, "1", { b: 2 }];
console.log(anyList);
function warnUser() {
    console.log("aaaa");
}
var a = warnUser();
console.log(a);

for (var i = 0; i < 10 ; i++) {
    setTimeout(() => {
        console.log(i);
        
    }, 10*i);
}
