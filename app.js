var express = require('express');

var app = express();

app.get('/', function (req, res) {
  // res.send({say: 'hello world!'});
  res.sendFile( __dirname + "/" + "dist/index.html" );
})

app.get('/user', function (req, res) {
  res.json({name: 'allen', age: 18})
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port)
})
