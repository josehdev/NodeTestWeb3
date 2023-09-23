const http = require('http');

//var port = normalizePort(process.env.PORT || '3000');
var port = '8080';

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        //console.log('New connection...');
        res.write('Hello World ' + new Date().toLocaleString());
        res.end();    
    }

    if(req.url === '/api/courses') {
        //console.log('New connection...');
        res.write(JSON.stringify([1, 2, 3]));
        res.end();    
    }    
});

server.on('connection', (socket) => {
    console.log('New connection at', new Date().toLocaleString());
});

server.listen(port);

console.log(`Rev1.4 - Listening on port ${port}...`);

// function normalizePort(val) {
//     var port = parseInt(val, 10);
  
//     if (isNaN(port)) {
//       // named pipe
//       return val;
//     }
  
//     if (port >= 0) {
//       // port number
//       return port;
//     }
  
//     return false;
//   }