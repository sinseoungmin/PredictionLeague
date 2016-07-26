var express = require('express');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack=require('webpack');

var app = express();
var port = 8070;
var devPort = 8080;

app.use(express.static(path.join(__dirname, 'public')));

if(process.env.NODE_ENV=='development'){
  console.log('development server running');
  var config = require('./webpack.dev.config');
  var compiler = webpack(config);
  var devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, function(){
      console.log('webpack-dev-server is listening on port', devPort);
  });
}

app.get('*', function (req, res){
  res.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
