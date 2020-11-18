const fs = require('fs');
const express = require('express');
const server = express();

server.get('/', (req, res) => {
    let data = fs.readFileSync('state.txt', 'utf8');
    res.json(Number(data));
});

server.post('/incr', (req, res) => { 
    console.log("POST incr");
    
    let data = fs.readFileSync('state.txt', 'utf8');
    let old = Number(data);
    fs.writeFileSync('state.txt', String(old+1), 'utf8');
    res.sendStatus(200);
});

server.post('/reset', (req, res) => { 
    console.log("POST reset");
    fs.writeFileSync('state.txt', String(2), 'utf8');
    res.sendStatus(200);
});

fs.writeFileSync('state.txt', String(2), 'utf8');
server.listen(8080);