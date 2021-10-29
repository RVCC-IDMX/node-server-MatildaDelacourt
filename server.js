/*
const http = require('http');
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3001;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`server running at http://${HOSTNAME}:${PORT}/`);
});

console.log(__filename);
console.log(__dirname);

const { unlink } = require('fs');

unlink('hello.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted!');
});

import { addNums } from './addNums.js';

const sum = addNums(2, 2);
console.log(sum);
*/

const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  let path = './';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
