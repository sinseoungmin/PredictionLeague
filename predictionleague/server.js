var express = require('express');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack=require('webpack');

var app = express();
var port = 8070;
var devPort = 8080;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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

app.post('/contactus',function(req,res){
  var name = req.body.name,
      id   = req.body.id;
  res.send('name:'+name +'  id:'+id);
})

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
