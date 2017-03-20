var querystring = require("querystring"),
  fs = require("fs"),
  formidable = require("formidable");
function start(response) {
  console.log("request handler 'start' was called");

  var body = '<html>' + '<head>' + '<body>' + '<form action="/upload" method="post" enctype="multipart/form-data">' +
    '<input type="file" name="upload"/><input type="submit" value="upload file">' + '</form></body></html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();

}

function upload(response, request) {
  console.log("request handler 'upload' was called");

  var form = new formidable.IncomingForm();

  // form.uploadDir = './img';

  form.parse(request, function (error, fields, file) {
    // fs.renameSync(file.upload.path, "./test.png");
    fs.renameSync(file.upload.path, "./img/test-"+Math.random()*Math.pow(10, 16)+".png");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("image:</br>");
    response.write("<image src='/show'/>");
    response.end();
  });

}

function show(response) {
  console.log("request handler 'show' was called");
  fs.readFile("./img/test.png", "binary", function (error, file) {
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
