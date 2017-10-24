const http = require('http');
const server = http.createServer((req, res) => res.end('Yahoo!'));

server.listen(3000);