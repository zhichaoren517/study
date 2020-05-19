// 发布订阅模式
// 发布 ==> 中间代理 <== 订阅
let fs = require("fs")
let path = require("path")
function Events(){
    this.results = [];
    this.callbacks = []
}
Events.prototype.on = function( module , callback ){
    this.callbacks.push( {
        "module":module,
        callback:callback
    } )
}
Events.prototype.emit = function( module , data ){
    this.results.push( {
        "module":module,
        results:data
    } )
    this.callbacks.forEach( cb => (cb.module == module) && cb.callback( this.results.find( r => r.module == module ).results ) )
}
let e = new Events()
e.on("readage", function(data){
    console.log(data,'readage');
} )  
e.on("readname", function(data){
    console.log(data,'readname');
} )  
fs.readFile( path.resolve(__dirname,"../age.js") , "utf8" , function(err , data){
    if(data){
        e.emit("readage", data )
    }
    if(err){
        throw new Error( err )
    }   
} )
fs.readFile( path.resolve(__dirname,"../name.js") , "utf8" , function(err , data){
    if(data){
        e.emit("readname", data )
    }
    if(err){
        throw new Error( err )
    }   
} )

