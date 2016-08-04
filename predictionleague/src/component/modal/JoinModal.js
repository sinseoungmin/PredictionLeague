import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'
import nbaTeam from '../../data/nbaTeam'


const closeClick = ()=>{
  $('#joinModal').modal('toggle');
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
      email:'the_answ3r@naver.com'
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

const posiClick = (e) =>{
  let targetName = e.target.getAttribute('name');

  let page = targetName.substr(0,targetName.length-3);
  let num = targetName.slice(-1);

  //전체적으로 class 제거
  let pageTab = page + 'Tab';
  let allTab = document.getElementsByClassName(pageTab);
  for(var i=0; i<allTab.length;  i++){
    utils.removeClass(allTab[i],'tabClick');
  }

  //click 된 element 대해서 처리
  utils.addClass(e.target, 'tabClick');
  utils.addClass(document.getElementById(pageTab+num), 'tabClick');
}
const teamClick = (e) =>{
  utils.addClass(e.target, 'teamClick');
}

var JoinModal = React.createClass({
  render() {
    console.log(nbaTeam);
    return (
      <div className="modal fade" id='joinModal' tabIndex="-1" role="dialog" aria-labelledby="testLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" style={{fontSize:'25px', fontWeight: '700'}}>Prediction League</span>
            </div>
            <div className="modal-body">
              <div id='joinBody1'>
                <input type='text' className='joinInput' id='joinId' placeholder='아이디'></input>
                <input type='text' className='joinInput' id='joinNickname' placeholder='닉네임'></input>
                <input type='text' className='joinInput' id='joinEmail' placeholder='이메일'></input>
              </div>
              <div id='joinBody2'>
                <input type='password' className='joinInput' id='joinPw' placeholder='비밀번호'></input>
                <input type='password' className='joinInput' id='joinPw2' placeholder='비밀번호 재확인'></input>
              </div>
              <div id='joinBody3'>
                <div className='joinText'>Select your team!</div>
                <div className='joinText2'>Eastern Conference</div>
                <table className='joinTeam'>
                  <tbody>
                    <tr className='joinTeamRow'>
                      {nbaTeam.east.map((url,index) =>{
                        if(index<5){
                          return(
                            <td name={url} className='joinTeamEx' onClick={teamClick} key={index}>
                              <img className='joinNBAlogo' src={'/image/teamLogo/'+url+'.gif'} ></img>
                            </td>
                          );
                        }
                      })}
                    </tr>
                    <tr className='joinTeamRow'>
                      {nbaTeam.east.map((url,index) =>{
                        if(index>=5 && index <10){
                          return(
                            <td name={url} className='joinTeamEx' onClick={teamClick} key={index}>
                              <img className='joinNBAlogo' src={'/image/teamLogo/'+url+'.gif'} ></img>
                            </td>
                          );
                        }
                      })}
                    </tr>
                    <tr className='joinTeamRow'>
                      {nbaTeam.east.map((url,index) =>{
                        if(index>=10){
                          return(
                            <td name={url} className='joinTeamEx' onClick={teamClick} key={index}>
                              <img className='joinNBAlogo' src={'/image/teamLogo/'+url+'.gif'} ></img>
                            </td>
                          );
                        }
                      })}
                    </tr>
                  </tbody>
                </table>
                <div className='joinText2'>Western Conference</div>
                <table className='joinTeam'>
                  <tbody>
                    <tr className='joinTeamRow'>
                      {nbaTeam.west.map((url,index) =>{
                        if(index<5){
                          return(
                            <td name={url} className='joinTeamEx' onClick={teamClick} key={index}>
                              <img className='joinNBAlogo' src={'/image/teamLogo/'+url+'.gif'} ></img>
                            </td>
                          );
                        }
                      })}
                    </tr>
                    <tr className='joinTeamRow'>
                      {nbaTeam.west.map((url,index) =>{
                        if(index>=5 && index <10){
                          return(
                            <td name={url} className='joinTeamEx' onClick={teamClick} key={index}>
                              <img className='joinNBAlogo' src={'/image/teamLogo/'+url+'.gif'} ></img>
                            </td>
                          );
                        }
                      })}
                    </tr>
                    <tr className='joinTeamRow'>
                      {nbaTeam.west.map((url,index) =>{
                        if(index>=10){
                          return(
                            <td name={url} className='joinTeamEx' onClick={teamClick} key={index}>
                              <img className='joinNBAlogo' src={'/image/teamLogo/'+url+'.gif'} ></img>
                            </td>
                          );
                        }
                      })}
                    </tr>
                  </tbody>
                </table>

                <div className='joinText' id='joinPositionText'>Select your position!</div>
                <ul className='joinPosition'>
                  <li name='pg' className='joinPositionEx' onClick={posiClick}>PG</li>
                  <li name='sg' className='joinPositionEx' onClick={posiClick}>SG</li>
                  <li name='sf' className='joinPositionEx' onClick={posiClick}>SF</li>
                  <li name='pf' className='joinPositionEx' onClick={posiClick}>PF</li>
                  <li name='c' className='joinPositionEx' onClick={posiClick}>C</li>
                </ul>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" id='joinButton' className="btn btn-default"  >회원가입</button>
              <button type="button" id='loginButton' className="btn btn-primary" >로그인</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = JoinModal;
