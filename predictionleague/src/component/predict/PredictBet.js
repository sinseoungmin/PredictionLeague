import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router'
import utils from '../../utils'

import actions from '../../actions'
import {store} from '../../index'


const pTypeClick = (e) =>{

  let idx = document.getElementsByClassName('predictTab tabClick')[1].id.slice(-1);

  //tab과 contents class 제거
  let allTab = document.getElementsByClassName('pT'+idx);
  for(var i=0; i<allTab.length;  i++){
    utils.removeClass(allTab[i],'pClick');
  }

  //click 된 element 대해서 처리
  let targetName = e.target.getAttribute('name');

  utils.addClass(e.target, 'pClick');
  utils.addClass(document.getElementById('bet'+targetName+idx), 'pClick');
}


const betSingleChange = (pick, idx, e) =>{
  let total=0;

  for(let i=0; i<pick.length; i++){
    let win = '.betSinglePossWinnings'+idx+'_'+i;
    let odds = '.betSingleOdds'+idx+'_'+i;
    let value = ($(odds).text() * e.target.value).toFixed(0);

    total += Number(value);

    $('.betSinglePossWinnings'+idx+'_'+i).html("<div>"+utils.makeComma(value)+"</div>");
  }

  $('.betSingleTotalAmount'+idx).html("<div>"+utils.makeComma(pick.length * e.target.value)+"<span class='betWon'>원</span></div>");
  $('.betSingleTotalWinnings'+idx).html("<div>"+utils.makeComma(total)+"<span class='betWon'>원</span></div>");
}
const betMultiChange = (idx, e) =>{
  let odds = $('.betMultiOdds'+idx).text();
  let win = e.target.value * Number(odds);

  $('.betMultiTotalWinnings'+idx).html("<div>"+utils.makeComma(win.toFixed(0))+"<span class='betWon'>원</span></div>");
}


/* redux state를 변경해도 지워지지 않는 class, text 직접 지움 */
const renderReset = (idx) =>{
  // single
  $('.betSI'+idx).val('');
  $('.betSingleTotalAmount'+idx).text('');
  $('.betSingleTotalWinnings'+idx).text('');
  $('.bsp'+idx).text('');

  //multi
  $('.betMI'+idx).val('');
  $('.betMultiTotalWinnings'+idx).text('');
}

/* 베팅하기 버튼 클릭 후 필요한 작업 */
const afterButtonClick = (idx) =>{

  /* 1)redux state (pick) 변경 */
  switch (idx) {
    case '3':
      store.dispatch({type:'PICKCLEAN'});
      break;
    case '4':
      store.dispatch({type:'PICK1CLEAN'});
      break;
    case '5':
      store.dispatch({type:'PICK2CLEAN'});
      break;
    default:
      alert('error 관리자에게 문의해주세요.');
  }

  /* 2) css, text 직접 삭제 */
  $('.awayOdds'+idx).removeClass('predictGameLeft');
  $('.awayLogo'+idx).removeClass('predictGameRight');
  $('.homeOdds'+idx).removeClass('predictGameRight');
  $('.homeLogo'+idx).removeClass('predictGameLeft');

  $('.predictPicksDiv'+idx).text('');
}


/* 베팅하기 버튼 ( 단일 && 복수 ) */
const betSingleButton = (userInfo, userPick, date, pick, idx, balance)=>{
  /* 1)firebase userPick DB에 upload  && redux state(userPick) 변경*/
  let id = userInfo.id;
  let stake = $('.betSI'+idx).val();

  /* 1-1) userPick이 기존에 없었거나, 중복된 경기가 pick 됐을 떄, balance를 조정해야 함 */
  let dupBalance = 0;
  let chkObj = (userPick? (userPick.s? userPick.s : {}) : {});

  for(let i=0; i<pick.length; i++){
    firebase.database().ref('userPick/'+id+'/'+date+'/s/'+pick[i].away+'_'+pick[i].home).set({
      win:pick[i].win,
      stake:stake,
      odds:pick[i].odds,
      hit:'yet'
    });

    if(!!chkObj.hasOwnProperty(pick[i].away+'_'+pick[i].home)){
      dupBalance += Number(chkObj[pick[i].away+'_'+pick[i].home].stake);
    }
    store.dispatch(actions.singleUp(idx-1, stake, pick[i]));
  }

  balance = balance + dupBalance - stake * pick.length;

  firebase.database().ref('userPick/'+id+'/'+date+'/balance').set(Number(balance));
  store.dispatch(actions.calBalance(idx-1, Number(balance)));


  /* 3)마무리 작업 */
  afterButtonClick(idx);

}
const betMultiButton = (userInfo, userPick, date, pick, idx, balance)=>{
  /* 1)firebase userPick DB에 upload */
  let id = userInfo.id;
  let stake = $('.betMI'+idx).val();
  let odds = $('.betMultiOdds'+idx).text();
  let mIdx = utils.randKey(10);

  let game ={};
  for(let i=0; i<pick.length; i++){
    game[pick[i].away+'_'+pick[i].home] = pick[i].win;
  }

  firebase.database().ref('userPick/'+id+'/'+date+'/m/'+mIdx).set({
    game:game,
    stake:stake,
    odds:odds,
    hit:'yet'
  });


  /* 2)redux state(userPick) 변경 */
  store.dispatch(actions.multiUp(idx-1, stake, game, odds, mIdx));


  /* 3)balance 조정 */
  balance -= stake ;

  firebase.database().ref('userPick/'+id+'/'+date+'/balance').set(Number(balance));
  store.dispatch(actions.calBalance(idx-1, Number(balance)));


  /* 3)마무리 작업 */
  afterButtonClick(idx);

}


var PredictBet = React.createClass({
  componentDidMount(){

  },
  render() {
    let userInfo = this.props.userInfo;
    let userPick = {};
    let idx = this.props.idx;
    let date = utils.getCurrentDate(idx-3);
    let pick = {};

    /* 그제, 어제는 베팅할 필요가 없음 */
    if(idx < 3){return(<div></div>);}

    /* 오늘, 내일 모레 */
    switch (idx) {
      case '3':
        pick = this.props.pick;
        userPick = this.props.userPick[2];
        break;
      case '4':
        pick = this.props.pick1;
        userPick = this.props.userPick[3];
        break;
      case '5':
        pick = this.props.pick2;
        userPick = this.props.userPick[4];
        break;
      default:
        alert('error 관리자에게 문의해주세요.');
    }


    /* pick이 없을 경우, 베팅할 필요가 없음?
    if(pick.length == 0){return(<div></div>)}
    */

    /* pick이 바뀔 때, 자동으로 베팅금액 리셋 */
    renderReset(idx);


    /* 잔고 */
    let balance = (userPick? (userPick.balance? userPick.balance : utils.LIMITMONEY) : utils.LIMITMONEY);


    /* 최종배당률 */
    let multiOdds = 1;
    for(let j=0; j<pick.length; j++){
      multiOdds *= Number(pick[j].odds);
    }
    multiOdds = Number(multiOdds).toFixed(2);

    return (
      <div className='predictBetContainer'>
        <div className='predictType'>
          <div className={"pType pClick pT"+idx}  name='Single' onClick={pTypeClick}>단일</div>
          <div className={"pType pT"+idx}  name='Multi' onClick={pTypeClick}>복수</div>
        </div>
        <div className='predictBetting'>
          <div id={'betSingle'+idx} className={'pTab pClick pT'+idx}>
            <div className='betSingleTop'>
              <table className='betSingleTable'>
                <thead>
                  <tr>
                    <td></td><td>경기</td><td></td><td>승리팀</td><td>배당률</td><td>예상적중금액</td>
                  </tr>
                </thead>
                <tbody>
                  {pick.map((pick,index) =>{
                    return(
                      <tr key={index}>
                        <td>{pick.away.toUpperCase()}</td>
                        <td> vs </td>
                        <td>{pick.home.toUpperCase()}</td>
                        <td>{pick.win.toUpperCase()}</td>
                        <td className={'betSingleOdds'+idx+'_'+index}>{pick.odds}</td>
                        <td className={'bsp'+idx+' betSinglePossWinnings'+idx+'_'+index}></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className='betSingleBottom'>
              <table className='betBottomTable'>
                <tbody>
                  <tr>
                    <td>베팅 가능금액</td>
                    <td className={'betBalance'+idx}>{utils.makeComma(balance)}<span className='betWon'>원</span></td>
                  </tr>
                  <tr>
                    <td>경기 별 베팅금액</td>
                    <td><input type='number' className={'betSingleInput betSI'+idx} onChange={betSingleChange.bind(this, pick, idx)}></input><span className='betWon'>원</span></td>
                  </tr>
                  <tr>
                    <td>총 베팅금액</td>
                    <td className={'betSingleTotalAmount'+idx}></td>
                  </tr>
                  <tr>
                    <td>총 예상적중금액</td>
                    <td className={'betSingleTotalWinnings'+idx}></td>
                  </tr>
                </tbody>
              </table>
              <button type="button" className={"btn betButton betSingleButton"+idx}
                onClick={betSingleButton.bind(this, userInfo, userPick, date, pick, idx, balance)} >베팅하기</button>
            </div>
          </div>
          <div id={'betMulti'+idx} className={'pTab pT'+idx}>
            <div className='betMultiTop'>
              <table className='betMultiTable'>
                <thead>
                  <tr>
                    <td></td><td>경기</td><td></td><td>승리팀</td><td>배당률</td>
                  </tr>
                </thead>
                <tbody>
                  {pick.map((pick,index) =>{
                    return(
                      <tr key={index}>
                        <td>{pick.away.toUpperCase()}</td>
                        <td> vs </td>
                        <td>{pick.home.toUpperCase()}</td>
                        <td>{pick.win.toUpperCase()}</td>
                        <td>{pick.odds}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className='betMultiBottom'>
              <table className='betBottomTable'>
                <tbody>
                  <tr>
                    <td>최종 배당률</td>
                    <td className={'betMultiOdds'+idx}>{multiOdds}</td>
                  </tr>
                  <tr>
                    <td>베팅 가능금액</td>
                    <td className={'betBalance'+idx}>{utils.makeComma(balance)}<span className='betWon'>원</span></td>
                  </tr>
                  <tr>
                    <td>베팅금액</td>
                    <td><input type='number' className={'betMultiInput betMI'+idx} onChange={betMultiChange.bind(this, idx)}></input><span className='betWon'>원</span></td>
                  </tr>
                  <tr>
                    <td>예상적중금액</td>
                    <td className={'betMultiTotalWinnings'+idx}></td>
                  </tr>
                </tbody>
              </table>
              <button type="button" className={"btn betButton betMultiButton"+idx}
                onClick={betMultiButton.bind(this, userInfo, userPick, date, pick, idx, balance)}>베팅하기</button>
            </div>
          </div>
        </div>
      </div>
    );

  }
});
/*
- userBetting/아이디/날짜/S/원정팀_홈팀 => win, stake, odds, hit:'Y'or'N'
- userBetting/아이디/날짜/M/index => game:{key:원정팀_홈팀, value:away or home}, stake, odds, hit:'Y'or'N'
*/

const mapStateToPredictBetProps = (state) =>{
  return {
    userInfo:state.userInfo,
    userPick:state.userPick,
    pick:state.pick,
    pick1:state.pick1,
    pick2:state.pick2
  };
}

module.exports = connect(mapStateToPredictBetProps)(PredictBet);
