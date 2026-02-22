console.log("Hi World!");// simple change by collaborator

console.log("Hi Praneepa!"); //small chage by navanga
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!');
  res.end();
}).listen(8081);

console.log("Server running at http://localhost:8081");