var express = require('express');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync('index.html');
var page = buffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send(page);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
