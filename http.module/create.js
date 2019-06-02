var http = require('http');
var server = http.createServer();
server.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52237');
});

setInterval(function() {
    server.close();
}, 1000);