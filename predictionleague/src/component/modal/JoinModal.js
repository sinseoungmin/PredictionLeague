import React from 'react'
import {connect} from 'react-redux';
import utils from '../../utils'
import nbaTeam from '../../data/nbaTeam'
import actions from '../../actions'

/*  모달 닫기  */
const closeClick = ()=>{
  $('#joinModal').modal('toggle');
}

/*  비밀번호 기준 및 보안성 체크  */
const pwClick = () =>{
  let title ='';
  let contents = '';

  title += '<div className="size10">사용 불가능한 비밀번호</div>'

  contents += "<ol> <li>6자 이하</li> \n"
  contents += "<li>공백의 사용</li> \n"
  contents += "<li>숫자, 문자가 혼용되지 않은 경우</li> \n"
  contents += "<li>3자리 이상 연속되는 숫자나 영문</li> \n"
  contents += "<li>3자리 이상 반복되는 숫자나 문자</li> </ol>\n"

  utils.makeAlert(title,contents);
}
const pwCheck = (pw) =>{
  let pwStrength = 0;
  let filter1 = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{7,}$/i;
  let filter2 = /(.)\1\1/;
  let serialNum = "0123456789";
  let pass_flag1 = true;
  let pass_flag3 = true;

  for (var i = 0; (i + 2) < serialNum.length; i++) {
    if (pw.indexOf(serialNum.substring(i, i + 3)) != -1) {
      pass_flag3 = false;
    }
  }

  if(pw.indexOf("#")!=-1||pw.indexOf("&")!=-1){
    return 1;
  }else{
    if (filter1.test(pw) && !filter2.test(pw) && pass_flag1
        && pass_flag3) {// 보안기준 소문자 특수문자 대문자 숫자 추가시 보안 강
      pwStrength += /[A-Z]{1,}/.test(pw) ? 1 : 0;
      pwStrength += /[a-z]{1,}/.test(pw) ? 1 : 0;
      pwStrength += /[0-9]{1,}/.test(pw) ? 1 : 0;
      pwStrength += /[!@#$%^&*()<>?":;`~]{1,}/.test(pw) ? 1 : 0;
    } else {
      return 1;
    }
  }

  switch (pwStrength) {
  case 3:
    return 3;
  case 4:
    return 4;
  default:
    return 2;
  }
}

const testClick = ()=>{
  let user = firebase.auth().currentUser;
  let email,id, nickName, uid;

  if (user != null) {
    id = user.displayName;
    email = user.email;
    nickName = user.photoURL;
    uid = user.uid;
  }

  console.log('id: '+ id);
  console.log('email: '+ email);
  console.log('nickName: '+ nickName);
  console.log('uid: '+ uid);

}
const outClick = ()=>{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('로그아웃');
  }, function(error) {
    // An error happened.
    console.log('로그아웃 실패!!');
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

/*  team && position click  */
const teamClick = (e) =>{
  let allTeamCheck = document.getElementsByClassName('teamCheck');
  for(var i=0; i<allTeamCheck.length;  i++){
    utils.removeClass(allTeamCheck[i],'teamClick');
  }

  if(e.target.tagName == 'TD'){utils.addClass(e.target.childNodes[1], 'teamClick')}
  else{utils.addClass(e.target.parentNode.childNodes[1], 'teamClick')}

  ableButton();
}
const posiClick = (e) =>{
  let allPosiCheck = document.getElementsByClassName('positionCheck');
  for(var i=0; i<allPosiCheck.length;  i++){
    utils.removeClass(allPosiCheck[i],'posiClick');
  }

  if(e.target.tagName == 'TD'){utils.addClass(e.target.childNodes[1], 'posiClick')}
  else{utils.addClass(e.target.parentNode.childNodes[1], 'posiClick')}

  ableButton();
}

/*  가입하기 버튼 활성화  */
const ableButton = ()=>{
  let id = document.getElementById('joinId').value != '';
  let nickName = document.getElementById('joinNickname').value != '';
  let email = document.getElementById('joinEmail').value != '';
  let pw = document.getElementById('joinPw').value != '';
  let pw2 = document.getElementById('joinPw2').value != '';
  let teamClick = document.getElementsByClassName('teamClick').length != 0;
  let posiClick = document.getElementsByClassName('posiClick').length != 0;
  let ps = document.getElementById('joinPwAB').innerHTML;
  let psCheck = (ps == '보통' || ps =='안전');

  if(id && nickName && email && pw && pw2 && teamClick && posiClick && psCheck){
    $("#joinOkB").removeAttr('disabled');
  }else{
    $("#joinOkB").attr('disabled','disabled');
  }
}
/*  가입하기 버튼 클릭  */
const joinClick = () =>{
  let id = document.getElementById('joinId').value;
  let nickName = document.getElementById('joinNickname').value;
  let email = document.getElementById('joinEmail').value;
  let pw = document.getElementById('joinPw').value;
  let team = document.getElementsByClassName('teamClick')[0].parentNode.getAttribute("name");
  let position = document.getElementsByClassName('posiClick')[0].parentNode.getAttribute("name");


  // 1) 아이디 중복 확인

  // 2) 닉네임 중복 확인

  // 3) firebase 연동
  firebase.auth().createUserWithEmailAndPassword(email, pw).then(function(val) {
    // 성공
    console.log('firebase 계정생성 성공!');

    // 3-1) id-email table
    firebase.database().ref('id-email/' + id).set({email});
    // 3-2) nickName table
    firebase.database().ref('nickName/' + nickName).set({statue:'done'});

    // 3-3) 사용자 정보 table
    firebase.database().ref('userInfo/' + id).set({
      email:email,
      nickName:nickName,
      team:team,
      position:position
    });

  }).catch(function(error) {
    // 실패
    console.log('firebase 계정생성 실패!');
    console.log(error);

    if(error.code=='auth/email-already-in-use'){
      console.log('이미 사용중인 이메일 입니다');
    }
  });
}

/*  아이디, 닉네임 중복 체크  */
const idCheck = (id)=>{
  if(!!id){
    firebase.database().ref('/id-email/'+ id).once('value').then(function(snapshot) {
      let chk =  snapshot.val();
      if(!chk){
        console.log('새로운 것');
        $("#joinInfoId").css('display','none');
      }
      else{
        console.log('DB에 같은 아이디 있음');
        $("#joinInfoId").css('display','block');
      }
    });
  }
}
const nickCheck = (nick)=>{
  if(!!nick){
    firebase.database().ref('/nickName/'+ nick).once('value').then(function(snapshot) {
      let chk =  snapshot.val();
      if(!chk){
        console.log('새로운 것');
        $("#joinInfoNi").css('display','none');
      }
      else{
        console.log('DB에 같은 닉네임 있음');
        $("#joinInfoNi").css('display','block');
      }
    });
  }
}

var JoinModal = React.createClass({
  componentDidMount(){

    //아이디, 닉네임, 이메일  event
    $('#joinId').keyup(()=>{$("#joinInfoId").css('display','none');});
    $('#joinNickname').keyup(()=>{$("#joinInfoNi").css('display','none');});

    $('#joinId').focusout((e)=>{
      idCheck(e.target.value);
      ableButton();
    });
    $('#joinNickname').focusout((e)=>{
      nickCheck(e.target.value);
      ableButton();
    });
    $('#joinEmail').focusout(()=>{ableButton();});

    //비밀번호(&재확인) 입력시 notice
    $('#joinPw').keyup(function(e){

      $('#joinPwA2').css('display','none');

      if($('#joinPw').val()==''){
        $("#joinPwAF").text("");
        $("#joinPwAB").text("");
      }else{
        var pwStrength = pwCheck(e.target.value);

        if(pwStrength==1){
          $("#joinPwAF").text("");
          $("#joinPwAB").attr("style","color:gray;").text("사용할 수 없는 비밀번호 입니다.");
        }else if(pwStrength==2){
          $("#joinPwAF").text("안전도:");
          $("#joinPwAB").attr("style","color:orange;").text("보통");
        }else if(pwStrength>=3){
          $("#joinPwAF").text("안전도:");
          $("#joinPwAB").attr("style","color:green;").text("안전");
        }

        ableButton();
      }
    });
    $('#joinPw2').keyup(function(e){
      ableButton();
    });

  },
  render() {
    return (
      <div className="modal fade" id='joinModal' tabIndex="-1" role="dialog" aria-labelledby="testLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" onClick={ableButton} style={{fontSize:'25px', fontWeight: '700'}}>Prediction League</span>
              <i id='joinClose' className="fa fa-times fa-2x" onClick={closeClick} aria-hidden="true"></i>
            </div>
            <div className="modal-body">
              <div id='joinBody1'>
                <input type='text' className='joinInput joinInfo' id='joinId' placeholder='아이디'></input>
                <input type='text' className='joinInput joinInfo' id='joinNickname' placeholder='닉네임'></input>
                <input type='text' className='joinInput joinInfo' id='joinEmail' placeholder='이메일'></input>
              </div>
              <div id='joinInfoId' style={{fontSize:'14', paddingLeft:'15', fontWeight:'400',color:'#ff1313', display:'none'}}>이미 사용중인 아이디 입니다.</div>
              <div id='joinInfoNi' style={{fontSize:'14', paddingLeft:'15', fontWeight:'400',color:'#ff1313', display:'none'}}>이미 사용중인 닉네임 입니다.</div>
              <div id='joinBody2'>
                <input type='password' className='joinInput' id='joinPw' placeholder='비밀번호'></input>
                <div id='joinPwCircle' onClick={pwClick}>?</div>
                <input type='password' className='joinInput' id='joinPw2' placeholder='비밀번호 재확인'></input>
              </div>
              <div id = 'joinPwA'>
                <span id='joinPwAF'></span> <span id='joinPwAB'> </span>
              </div>
              <div id='joinPwA2' style={{fontSize:'13', fontWeight:'400',color:'#ff1313', display:'none'}}>비밀번호가 일치하지 않습니다.</div>
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
              <button type="button" id='joinOkB' className="btn btn-primary" onClick={joinClick} >가입하기</button>
              <button type="button" id='testB' className="btn btn-primary" onClick={testClick}>test</button>
              <button type="button" id='testB' className="btn btn-primary" onClick={outClick}>로그아웃</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = JoinModal;
