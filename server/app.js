var app = require('express')();
process.app = app;//方便在其他地方使用app获取配置
//
require('./config')(__dirname, app);//所有配置
var mode = app.get('mode');
require('./controller/' + mode + 'Controller.js');

var config = app.get(mode);

require('http').createServer(app).listen(config.port, function () {
  console.log('%s已经启动,正监听:%s', config.name, config.port);
});
