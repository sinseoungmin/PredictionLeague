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

const teamClick = (e) =>{
  let allTeamCheck = document.getElementsByClassName('teamCheck');
  for(var i=0; i<allTeamCheck.length;  i++){
    utils.removeClass(allTeamCheck[i],'teamClick');
  }

  if(e.target.tagName == 'TD'){utils.addClass(e.target.childNodes[1], 'teamClick')}
  else{utils.addClass(e.target.parentNode.childNodes[1], 'teamClick')}
}
const posiClick = (e) =>{
  console.log(e.target);
  let allPosiCheck = document.getElementsByClassName('positionCheck');
  for(var i=0; i<allPosiCheck.length;  i++){
    utils.removeClass(allPosiCheck[i],'posiClick');
  }

  if(e.target.tagName == 'TD'){utils.addClass(e.target.childNodes[1], 'posiClick')}
  else{utils.addClass(e.target.parentNode.childNodes[1], 'posiClick')}
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
              <i id='joinClose' className="fa fa-times fa-2x" onClick={closeClick} aria-hidden="true"></i>
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
                              <i className="fa fa-check teamCheck" aria-hidden="true"></i>
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
                              <i className="fa fa-check teamCheck" aria-hidden="true"></i>
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
                              <i className="fa fa-check teamCheck" aria-hidden="true"></i>
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
                              <i className="fa fa-check teamCheck" aria-hidden="true"></i>
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
                              <i className="fa fa-check teamCheck" aria-hidden="true"></i>
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
                              <i className="fa fa-check teamCheck" aria-hidden="true"></i>
                            </td>
                          );
                        }
                      })}
                    </tr>
                  </tbody>
                </table>

                <div className='joinText' id='joinPositionText'>Select your position!</div>
                <table className='joinPosition'>
                  <tbody>
                    <tr>
                      <td name='pg' className='joinPositionEx' onClick={posiClick}>
                        PG<i className="fa fa-check positionCheck" aria-hidden="true"></i>
                      </td>
                      <td name='sg' className='joinPositionEx' onClick={posiClick}>
                        SG<i className="fa fa-check positionCheck" aria-hidden="true"></i>
                      </td>
                      <td name='sf' className='joinPositionEx' onClick={posiClick}>
                        SF<i className="fa fa-check positionCheck" aria-hidden="true"></i>
                      </td>
                      <td name='pf' className='joinPositionEx' onClick={posiClick}>
                        PF<i className="fa fa-check positionCheck" aria-hidden="true"></i>
                      </td>
                      <td name='c' className='joinPositionEx' onClick={posiClick}>
                        C<i className="fa fa-check positionCheck" aria-hidden="true"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" id='joinOkB' className="btn btn-primary" >가입하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = JoinModal;
