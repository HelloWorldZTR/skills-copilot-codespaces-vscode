//create webserver
var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  fs.readFile('comments.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
