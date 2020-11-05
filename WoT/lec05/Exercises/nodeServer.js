const express = require("express");
const { response } = require("express");
var bodyParser = require("body-parser"); // Ignore 

const server = express();
server.use(bodyParser.urlencoded({ extended: false })); // Ignore
server.use(bodyParser.json()); // Ignore

server.get("/", (req, res) => {
  console.log(`Request made to site. `);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request was good fam.\n");
});

server.get("/testPath", (req, res) => res.send("Path is Test!"));

server.post("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  console.log(req.body);
  console.log("post request");
  res.write("you posted:\n");
  res.end(JSON.stringify(req.body, null, 2));
});

server.all('/', (req, res, next) => {
  res.status(405).send('Method not allowed');
});


server.listen(8080);
