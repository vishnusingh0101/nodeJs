const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes.Handler);

server.listen(4000);
