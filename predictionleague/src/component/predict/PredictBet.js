import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router'
import utils from '../../utils'


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

    $('.betSinglePossWinnings'+idx+'_'+i).html("<div>"+Number(value).toLocaleString('en')+"</div>");
  }

  $('.betSingleTotalAmount'+idx).html("<div>"+Number(pick.length * e.target.value).toLocaleString('en')+"<span class='betWon'>원</span></div>");
  $('.betSingleTotalWinnings'+idx).html("<div>"+Number(total).toLocaleString('en')+"<span class='betWon'>원</span></div>");
}
const betMultiChange = (idx, e) =>{
  let odds = $('.betMultiOdds'+idx).text();
  let win = e.target.value * Number(odds);

  $('.betMultiTotalWinnings'+idx).html("<div>"+Number(win).toLocaleString('en')+"<span class='betWon'>원</span></div>");
}

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


var PredictBet = React.createClass({
  componentDidMount(){

  },
  render() {
    let idx = this.props.idx;
    let pick = {};

    /* 그제, 어제는 베팅할 필요가 없음 */
    if(idx < 3){return(<div></div>);}

    /* 오늘, 내일 모레 */
    switch (idx) {
      case '3':
        pick = this.props.pick;
        break;
      case '4':
        pick = this.props.pick1;
        break;
      case '5':
        pick = this.props.pick2;
        break;
      default:
        alert('error 관리자에게 문의해주세요.');
    }


    /* pick이 없을 경우, 베팅할 필요가 없음?
    if(pick.length == 0){return(<div></div>)}
    */

    /* pick이 바뀔 때, 자동으로 베팅금액 리셋 */
    renderReset(idx);

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
                    <td colSpan='3'>경기</td><td>승리팀</td><td>배당률</td><td>예상적중금액</td>
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
              <button type="button" className={"btn betButton betSingleButton"+idx} onClick={()=>{console.log('클릭클릭')}} >베팅하기</button>
            </div>
          </div>
          <div id={'betMulti'+idx} className={'pTab pT'+idx}>
            <div className='betMultiTop'>
              <table className='betMultiTable'>
                <thead>
                  <tr>
                    <td colSpan='3'>경기</td><td>승리팀</td><td>배당률</td>
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
                    <td>베팅금액</td>
                    <td><input type='number' className={'betMultiInput betMI'+idx} onChange={betMultiChange.bind(this, idx)}></input><span className='betWon'>원</span></td>
                  </tr>
                  <tr>
                    <td>예상적중금액</td>
                    <td className={'betMultiTotalWinnings'+idx}></td>
                  </tr>
                </tbody>
              </table>
              <button type="button" className={"btn betButton betMultiButton"+idx} onClick={()=>{console.log('클릭클릭')}} >베팅하기</button>
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
    pick:state.pick,
    pick1:state.pick1,
    pick2:state.pick2
  };
}

module.exports = connect(mapStateToPredictBetProps)(PredictBet);
