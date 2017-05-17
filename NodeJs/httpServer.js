var http = require('http')

http.createServer(function (request, response){
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content type: text/plain
    response.writeHead(200, {'Content-type': 'text/html'})

    // Send the response body as "Hello world"
    response.end('Hello world')
}).listen(8081)

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/')