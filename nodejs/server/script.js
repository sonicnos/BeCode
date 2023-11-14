const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made ' + req.url, req.method);
  res.setHeader("Content-Type", 'text/html');
  res.write('<p>hello</p>');
  res.write('<p>second balise</p>');
  res.end();
})

server.listen(3000, 'localhost', () => {
  console.log('listening port 3000');
})