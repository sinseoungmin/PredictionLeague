import React from 'react'
import {connect} from 'react-redux';
import utils from '../../utils'
import nbaTeam from '../../data/nbaTeam'
import actions from '../../actions'

/*  모달 닫기  */
const closeClick = ()=>{
  $('#joinModal').modal('toggle');
}


/*  아이디, 닉네임 중복 체크  */
const idCheck = (id)=>{
  if(!!id){
    firebase.database().ref('/id-email/'+ id).once('value').then(function(snapshot) {
      let chk =  snapshot.val();
      if(!chk)  {
        $("#joinInfoId").css('display','none');
      }
      else      {
        $("#joinInfoId").css('display','block');
        $("#joinInfoId").focus();
      }
    });
  }
}
const nickCheck = (nick)=>{
  if(!!nick){
    firebase.database().ref('/nickName/'+ nick).once('value').then(function(snapshot) {
      let chk =  snapshot.val();
      if(!chk)  {
        $("#joinInfoNi").css('display','none');
      }
      else      {
        $("#joinInfoNi").css('display','block');
        $("#joinInfoNi").focus();
      }
    });
  }
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
  let chk = document.getElementsByClassName('joinInfo');
  let chkNum = 0;
  for(let i=0; i<chk.length; i++){
    if(chk[i].style.display == 'block') chkNum++;
  }

  let id = document.getElementById('joinId').value != '';
  let nickName = document.getElementById('joinNickname').value != '';
  let email = document.getElementById('joinEmail').value != '';
  let pw = document.getElementById('joinPw').value != '';
  let pw2 = document.getElementById('joinPw2').value != '';
  let teamClick = document.getElementsByClassName('teamClick').length != 0;
  let posiClick = document.getElementsByClassName('posiClick').length != 0;
  let ps = document.getElementById('joinPwAB').innerHTML;
  let psCheck = (ps != '사용할 수 없는 비밀번호 입니다.');

  if(id && nickName && email && pw && pw2 && teamClick && posiClick && psCheck && (chkNum == 0)){
    $("#joinOkB").removeAttr('disabled');
  }else{
    $("#joinOkB").attr('disabled','disabled');
  }
}
/*  가입하기 버튼 클릭  */
const joinClick = () =>{
  firebaseJoin();
}

/*  firebase 회원가입  */
const firebaseJoin = ()=>{
  console.log('firebase 회원가입 시작');
  // 로딩바 실행
  utils.loadingStart();

  let id = document.getElementById('joinId').value;
  let nickName = document.getElementById('joinNickname').value;
  let email = document.getElementById('joinEmail').value;
  let pw = document.getElementById('joinPw').value;
  let pw2 = document.getElementById('joinPw2').value;
  let team = document.getElementsByClassName('teamClick')[0].parentNode.getAttribute("name");
  let position = document.getElementsByClassName('posiClick')[0].parentNode.getAttribute("name");


  // 1) DB에서 중복되는 아이디 있는지 검색
  firebase.database().ref('/id-email/'+ id).once('value').then(function(snapshot) {
    let chk1 =  snapshot.val();
    if(!chk1)  {
      // 1-1) 새로운 아이디
      console.log('새로운 아이디!!');

      // 2) DB에서 중복되는 닉네임이 있는지 검색
      firebase.database().ref('/nickName/'+ nickName).once('value').then(function(snapshot) {
        let chk =  snapshot.val();
        if(!chk)  {
          // 2-1) 새로운 닉네임
          console.log('새로운 닉네임!!');

          // 3) 비밀번호 같은지 확인
          if(pw !='' && pw2 !='' && pw === pw2){
            // 3-1) 비밀번호 같음
            console.log('비밀번호 일치!!');

            // 4) firebase 회원가입
            firebase.auth().createUserWithEmailAndPassword(email, pw).then(function(val) {
              // 4-1) 성공
              console.log('firebase 계정생성 성공!');

              // 5-1) id-email table
              firebase.database().ref('id-email/' + id).set({email});
              // 5-2) nickName table
              firebase.database().ref('nickName/' + nickName).set({statue:'done'});

              // 5-3) 사용자 정보 table
              firebase.database().ref('userInfo/' + id).set({
                email:email,
                nickName:nickName,
                team:team,
                position:position
              });

              // 로딩바 꺼!!
              utils.loadingEnd();

            }).catch(function(error) {
              // 4-2) 실패
              console.log('firebase 계정생성 실패!');
              console.log(error);
              utils.loadingEnd();

              if(error.code=='auth/email-already-in-use'){
                $("#joinInfoEm").css('display','block');
                document.getElementById("joinEmail").focus();
              }
              else if(error.code=='auth/invalid-email'){
                $("#joinInfoEm2").css('display','block');
                document.getElementById("joinEmail").focus();
              }
            });
          }
          else{
            // 3-2) 비밀번호 다름
            console.log('비밀번호 불일치!!');
            utils.loadingEnd();

            $("#joinPw").val('');
            $("#joinPw2").val('');
            $("#joinPwAF").text("");
            $("#joinPwAB").text("");
            $("#joinPwA2").css('display','block');
            document.getElementById("joinPw").focus();
          }
        }
        else{
          // 2-2) 중복되는 닉네임
          console.log('중복 닉네임!!');
          utils.loadingEnd();

          $("#joinInfoNi").css('display','block');
          document.getElementById("joinInfoNi").focus();
        }
      });
    }
    else{
      // 1-2) 중복되는 아이디
      console.log('중복 아이디!!');
      utils.loadingEnd();

      $("#joinInfoId").css('display','block');
      document.getElementById("joinInfoId").focus();
    }
  });
}

const testClick = ()=>{
  utils.loadingStart();
  setTimeout(utils.loadingEnd,3000);
}


var JoinModal = React.createClass({

  componentDidMount(){
    // 처음 가입하기 버튼 비활성화
    $("#joinOkB").attr('disabled','disabled');


    //아이디, 닉네임, 이메일  event
    $('#joinId').keyup(()=>{$("#joinInfoId").css('display','none');});
    $('#joinNickname').keyup(()=>{$("#joinInfoNi").css('display','none');});
    $('#joinEmail').keyup(()=>{
      $("#joinInfoEm").css('display','none');
      $("#joinInfoEm2").css('display','none');
    });

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
      $("#joinPwA2").css('display','none');
      ableButton();
    });

  },

  render() {
    return (
      <div className="modal fade" id='joinModal' tabIndex="-1" role="dialog" aria-labelledby="testLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" onClick={testClick} style={{fontSize:'25px', fontWeight: '700'}}>Prediction League</span>
              <i id='joinClose' className="fa fa-times fa-2x" onClick={closeClick} aria-hidden="true"></i>
            </div>
            <div className="modal-body">
              <div id='joinBody1'>
                <input type='text' className='joinInput' id='joinId' placeholder='아이디'></input>
                <input type='text' className='joinInput' id='joinNickname' placeholder='닉네임'></input>
                <input type='text' className='joinInput' id='joinEmail' placeholder='이메일'></input>
              </div>
              <div id='joinInfoId' className='joinInfo' tabIndex='1'style={{fontSize:'14', paddingLeft:'15', fontWeight:'400', display:'none'}}>이미 사용중인 <span style={{color:'#ff1313'}}>아이디</span> 입니다.</div>
              <div id='joinInfoNi' className='joinInfo' tabIndex='2'style={{fontSize:'14', paddingLeft:'15', fontWeight:'400', display:'none'}}>이미 사용중인 <span style={{color:'#ff1313'}}>닉네임</span> 입니다.</div>
              <div id='joinInfoEm' className='joinInfo' tabIndex='3' style={{fontSize:'14', paddingLeft:'15', fontWeight:'400', display:'none'}}>이미 사용중인 <span style={{color:'#ff1313'}}>이메일</span> 입니다.</div>
              <div id='joinInfoEm2' className='joinInfo' tabIndex='4' style={{fontSize:'14', paddingLeft:'15', fontWeight:'400', display:'none'}}><span style={{color:'#ff1313'}}>이메일 주소</span>가 올바르지 않습니다.</div>
            <div id='joinBody2'>
                <input type='password' className='joinInput' id='joinPw' placeholder='비밀번호'></input>
                <div id='joinPwCircle' onClick={pwClick}>?</div>
                <input type='password' className='joinInput' id='joinPw2' placeholder='비밀번호 재확인'></input>
              </div>
              <div id = 'joinPwA'>
                <span id='joinPwAF'></span> <span id='joinPwAB'> </span>
              </div>
              <div id='joinPwA2' className='joinInfo' tabIndex='5' style={{fontSize:'14', paddingLeft:'15', fontWeight:'400', display:'none'}}><span style={{color:'#ff1313'}}>비밀번호</span>가 일치하지 않습니다.</div>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = JoinModal;
