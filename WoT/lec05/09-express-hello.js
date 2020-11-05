const express = require('express');

const server = express();
server.get('/', (req, res) => res.send('Hello World!'));
server.get('/testPath', (req, res) => res.send('Path is Test!'));
server.listen(8080);