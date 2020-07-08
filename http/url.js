let url = require('url')
let str = "http://username:password@localhost:3030/pathname?query=1#hash"
console.log(url.parse(str));
