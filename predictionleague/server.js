var express = require('express');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack=require('webpack');

var app = express();
var port = 8070;
var devPort = 8080;

/* for sending check-email ===========================*/
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service:'Gmail',
  auth:{
    user:'answ3rsin@gmail.com',
    pass:'qmfkqh132!'
  }
});

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
/* =====================================================*/


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


/* for sending check-email2 ===========================*/
app.post('/contactus',function(req,res){
  var mailOptions = {
      from: 'PredictionLeague@gmail.com',
      to: req.body.email, // list of receivers
      subject: 'Check-email', // Subject line
      html: '<b>블라블라블라</b>' // html body
      //text: 'Hello world', // plaintext body
  };
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          res.send('메일발송 실패 / error 확인하세요');
          res.send(error);
      }
      res.send('Message sent:');
      res.send(info);
  });
})
/* =====================================================*/


app.listen(port, function () {
  console.log('Server running on port ' + port);
});
