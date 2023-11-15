const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('request made ' + req.url, req.method);
  res.setHeader("Content-Type", 'text/html');

  let path = './views/';
  switch(req.url){
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html'
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    }else{
      res.write(data);
      res.end();
    }
  })

  // res.write('<p>hello</p>');
  // res.write('<p>second balise</p>');
  // res.end();
})

server.listen(3000, 'localhost', () => {
  console.log('listening port 3000');
})