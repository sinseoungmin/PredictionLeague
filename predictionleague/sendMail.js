var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP", {
  service: 'Gmail',
  auth: {
    user: 'answ3rsin@gmail.com',
    pass: 'qmfkqh132!'
  }
});

var mailOptions = {
  from: '신승민 <answ3rsin@gmail.com>',
  to: 'the_answ3r@naver.com',
  subject: 'Nodemailer 테스트',
  text: '평문 보내기 테스트 '
};

smtpTransport.sendMail(mailOptions, function(error, response){

  if (error){
    console.log(error);
  } else {
    console.log("Message sent : " + response.message);
  }
  smtpTransport.close();
});
