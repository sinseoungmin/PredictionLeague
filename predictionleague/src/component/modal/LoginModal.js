import React from 'react'
import { Link } from 'react-router'


const loginClick = ()=>{
  let id = document.getElementById('idInput').value;
  let pw = document.getElementById('pwInput').value;

  //로그인
  firebase.auth().signInWithEmailAndPassword(id, pw).catch(function(error) {
    console.log(error);
  });
  /*  로그아웃
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  */
}

const joinClick = ()=>{
  let id = document.getElementById('idInput').value;
  let pw = document.getElementById('pwInput').value;

  /*  회원가입  */
    firebase.auth().createUserWithEmailAndPassword(id, pw).catch(function(error) {
      console.log(error);
    });
}

const showClick = ()=>{
  /* 상태가 변하는거 체크됨
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('성공');
        console.log(user)
      } else {
        // No user is signed in.
        console.log('실패');
      }
    });
  */

  /* 해당 계정 정보 가져오기 */
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, token;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      uid = user.uid;                          // The user's ID, unique to the Firebase project. Do NOT use
      token = user.getToken();                  // this value to authenticate with your backend server, if
                                              // you have one. Use User.getToken() instead.
    }
    console.log(name);
    console.log(email);
    console.log(photoUrl);
    console.log(uid);
    console.log(token);


  /* 비밀번호 변경 이메일 보내기
    var auth = firebase.auth();
    var emailAddress = "the_answ3r@naver.com";

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      console.log('보냄');
    }, function(error) {
      // An error happened.
      console.log('안보냄');
    });
  */


}

const logoutClick = ()=>{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('로그아웃');
  }, function(error) {
    // An error happened.
    console.log('로그아웃 실패!!');
    console.log(error);
  });
}

const sendEmail = ()=>{
  $.ajax({
    url: '/contactus',
    type:"POST",
    dataType: 'text',
    data:{
      name:'sin',
      id:'1'
    },
    cache: false,
    success: function(data) {
        // Success..
        console.log('success');
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(status, err.toString());
    }.bind(this)
  });
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
              <span id='findPw' onClick={showClick}>비밀번호 찾기</span>
              <span onClick={logoutClick}>로그아웃</span>
              <span onClick={sendEmail}>이메일</span>
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
