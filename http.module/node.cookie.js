var http = require('http');
http.createServer(function(request, response) {
    // var date = new Date();
    // date.setDate(date.getDate() + 7);
    var cookie = request.headers.cookie;

    response.writeHead(200, {
        'Content-Type': 'text/html',
        // 'Set-Cookie': [
        //     'breakfast = toast; Expire = '+date.toUTCString(),
        //     'dinner = chicken'
        // ]
        'Set-Cookie': [
            'name = Robin',
            'region = Canada'
        ]
    });

    response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function() {
    console.log('Server Running at http://127.0.1:52273');
});