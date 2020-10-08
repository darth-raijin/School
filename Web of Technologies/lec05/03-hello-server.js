const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
        setTimeout(() => {
          response.end('Hello World!');
        }, 5000); //timeout after 5 seconds

    
});
server.listen(8080);
