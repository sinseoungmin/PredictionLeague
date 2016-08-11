var express = require('express');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack=require('webpack');

var app = express();
var port = 8070;
var devPort = 8080;

/*  이메일 전송을 위한 도메인  */
//var domain = 'http://nomadconnection.com:3333/secretEmail';
var domain = 'http://localhost:8080/secretEmail';

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
  var id = req.body.id;
  var email = req.body.email;
  var eToken = req.body.eToken;

  var shtml = '';
  shtml += "<h2 style='margin-bottom:20px'>이메일 인증을 진행해주세요.</h2> \n"
  shtml += "<div style='font-size:15px; margin-bottom:15px'>안녕하세요.  <span style='font-weight:600'>"+email+"</span> 회원님!</div> \n"
  shtml += "<div style='font-size:13px'>본인 확인을 위한 인증 메일입니다.</div> \n"
  shtml += "<div style='font-size:13px; margin-bottom:10px'>아래 링크를 누르시면 이메일 인증이 완료됩니다.</div> \n"
  shtml += "<a href='"+domain+"?id="+id+"&email="+email+"&eToken="+eToken+"' style='font-size:15px;font-weight:700;text-decoration:underline'>링크</a> \n"
  shtml += "<div style='font-size:13px; font-weight:600; margin-top:10px'>본 메일은 발신전용 메일로, 회신되지 않습니다.</div> \n"

  var mailOptions = {
      from: 'PredictionLeague@gmail.com',
      to: email, // list of receivers
      subject: '[PL]이메일 인증을 진행해주세요.', // Subject line
      html: shtml // html body
  };
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          res.send('메일발송 실패 / error 확인하세요');
          //res.send(error);
      }
      res.send('Message sent: ' + info.response);
  });
})
/* =====================================================*/


app.listen(port, function () {
  console.log('Server running on port ' + port);
});
