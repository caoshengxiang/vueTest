var http = require('http');
var url = require('url');

function serverStart(route, handle) {
  http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;
    var postData = "";
    console.log('http request fot '+pathname+' recieved');

    req.setEncoding('utf8');

    req.addListener("data",function(postDataChunk){
      postData += postDataChunk;
      console.log('received post data chunk'+postDataChunk+".");
    });

    req.addListener("end",function(postDataChunk){
      route(handle,pathname,res,postData);
    });

    console.log('------------------------');

  }).listen(3000, '127.0.0.1')
  console.log('start at: 127.0.0.1:3000')
}

exports.start = serverStart;
