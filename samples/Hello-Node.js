const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node learner!!');
});

function sayBegin() {  console.log('Test. Begin!')  }
function sayBye() {  console.log('Test. Bye!')  }

const whereIAm = __dirname

sayBegin();
console.log(`I am at ${whereIAm}`)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

setTimeout(() => sayBye());


