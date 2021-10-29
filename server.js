const http = require('http');
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3001;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen(PORT, HOSTNAME, () => {
  //  console.log(`server running at http://${HOSTNAME}:${PORT}/`);
});

//console.log(__filename);
//console.log(__dirname);

const { appendFile } = require('fs');

const newContent = '\n This is some more new text';

appendFile('hi.txt', newContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content written!');
});
