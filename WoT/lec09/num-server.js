// Note: this server contains race conditions
const fs = require('fs');
const express = require('express');
const server = express();

server.get('/', (req, res) =>
    fs.readFile('state.txt', 'utf8', (err, data) => {
        if (err) { res.sendStatus(500); return; }
        res.json(Number(data));
    }));

server.post('/incr', (req, res) => { 
    console.log("POST incr");
    
    fs.readFile('state.txt', 'utf8', (err, data) => {
    //race: other clients may be interleaved after read
    if (err) { res.sendStatus(500); return; }
    let old = Number(data);
    fs.writeFile('state.txt', String(old+1), 'utf8', err => {
        if (err) { res.sendStatus(500); return; }
        res.sendStatus(200);
    })})});

server.post('/reset', (req, res) => { 
    console.log("POST reset");
    fs.writeFile('state.txt', String(2), 'utf8', err => {
        if (err) { res.sendStatus(500); return; }
        res.sendStatus(200);
    })});

fs.writeFileSync('state.txt', String(2), 'utf8');
server.listen(8080);