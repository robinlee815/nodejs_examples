var url = require('url');
var querystring = require('querystring');

var parsedObject  = url.parse('http://www.hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
console.log(querystring.parse(parsedObject.query));