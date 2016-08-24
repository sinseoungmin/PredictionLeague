import React from 'react'
import { Link } from 'react-router'


const loginClick = ()=>{
  let id = document.getElementById('idInput').value;
  let pw = document.getElementById('pwInput').value;

  /* 1)가입된 아이디 인지 확인 */
  firebase.database().ref('id-email/'+id).once('value').then(function(snapshot) {
    if(!snapshot.val()){
      console.log('없는 아이디 입니다.');
      return;
    }

    /* 2)이메일 인증이 된 아이디 인지 확인 */
    let validate = snapshot.val().validate;
    let email  = snapshot.val().email;

    if(validate == 'Y'){

      /* 3)firebase 로그인 */
      firebase.auth().signInWithEmailAndPassword(email, pw).catch(function(error) {
        console.log(error);
      });
    }
    else if(validate == 'N'){
      console.log('아직 인증되지 않은 이메일 입니다.');
    }
    else{
      console.log('시스템 에러 입니다.');
    }
  });
}

const joinClick = ()=>{
  $('#loginModal').modal('toggle');
  $('#joinModal').modal();
}

const findPwClick= ()=>{
  console.log('비밀번호 찾기');
}


var LoginModal = React.createClass({
  render() {
    return (
      <div className="modal fade" id='loginModal' tabIndex="-1" role="dialog" aria-labelledby="testLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">로그인</h4>
            </div>
            <div className="modal-body">
              <input type='text' className='loginInput' id='idInput' placeholder='아이디'></input>
              <input type='password' className='loginInput' id='pwInput' placeholder='비밀번호'></input>
            </div>
            <div className="modal-footer">
              <span id='findPw' onClick={findPwClick}>비밀번호 찾기</span>
              <button type="button" id='joinButton' className="btn btn-default"  onClick={joinClick}>회원가입</button>
              <button type="button" id='loginButton' className="btn btn-primary" onClick={loginClick}>로그인</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginModal;
