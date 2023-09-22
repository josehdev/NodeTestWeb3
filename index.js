const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        //console.log('New connection...');
        res.write('Hello World');
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

server.listen(3000);

console.log('Listening on port 3000...');

