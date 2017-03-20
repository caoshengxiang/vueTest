var http = require('http');
var url = require('url');

function serverStart(route, handle) {
  http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;

    console.log('http request fot '+pathname+' recieved');

    route(handle,pathname,res,req);

    console.log('------------------------');

  }).listen(3000, '127.0.0.1')
  console.log('start at: 127.0.0.1:3000')
}

exports.start = serverStart;
