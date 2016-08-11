import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'


/*  이메일 인증 함수 */
const emailValidate = (id, email, eToken) =>{
  let emailId = email.split('@')[0];
  let eDomain = email.split('@')[1];

  firebase.database().ref('/emailToken/'+ emailId).once('value').then(function(snapshot) {
    let info = snapshot.val();
    if(info.domain == eDomain && info.eToken == eToken){
      console.log('인증 완료!');

      // Firebase DB 적용
      firebase.database().ref('/id-email/'+id).update({validate:'Y'});

      $('#secretBody').text('인증되었습니다. 블라블라블라');
    }
    else{
      console.log('실패');
      $('#secretBody').text('인증 실패하였습니다.');
    }
  });
}


var SecretEmail = React.createClass({

  componentDidMount(){
    let id = utils.getParameter("id");
    let email = utils.getParameter("email");
    let eToken = utils.getParameter("eToken");

    emailValidate(id, email, eToken);
  },

  render() {
    return (
      <div id = 'secretEmailContainer'>
        <h3> Prediction League </h3>
        <div id='secretBody'>
          <div>인증 중입니다...</div>
          <div>잠시만 기다려주세요.</div>
          <div className='circleLoader'></div>
        </div>
      </div>
    );
  }
});

module.exports = SecretEmail;
