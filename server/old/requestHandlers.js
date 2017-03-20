var querystring = require("querystring");
var fs = require('fs');

function start(response, postData) {
  console.log("request handler 'start' was called");

  var body = '<html>' + '<head>' + '<body>' + '<form action="/upload" method="post">' + '<textarea name="text" rows="20" cols="50"></textarea>' +
    '<input type="submit" value="submit"/>' + '</form></body></html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();

}

function upload(response, postData) {
  console.log("request handler 'upload' was called");

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("you are sent:" + querystring.parse(postData).text);
  response.end();
}

function show(response, postData) {
  console.log("request handler 'show' was called");
  fs.readFile("./scooter.png", "binary", function (error, file) {
    if (error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
