import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router'
import utils from '../../utils'
import actions from '../../actions'

import {store} from '../../index'


const testClick = (game, idx, y, e)=>{
  /*
    1) 해당 td에 css 작업 해주기 => className
    2) Pick 부분에 팀 이름 넣어주기 => 하려면 해당 table이 몇 번째 인지 알아야 함(by key)
    3) 베팅하기 부분에 게임 넣어주기 => store.dispatch(actions.pickUp(game));
  */
  console.log('testClick');

  let target;
  if(e.target.tagName == 'TD'){target = e.target;}
  else{target = e.target.parentNode;}

  let flag;
  if(target.className.indexOf('away') != -1){
    if(target.className.indexOf('Odds') != -1){flag = 1}
    else{flag = 2}
  }
  else{
    if(target.className.indexOf('Odds') != -1){flag = 4}
    else{flag = 3}
  }


  /* 1) css작업  */
  if(target.className.indexOf('predictGameLeft') == -1 && target.className.indexOf('predictGameRight') == -1){
    //기존에 선택 하지 않음 => 고고!!
    //반대쪽에 선택했는지 확인해야 함
    switch (flag) {
      case 1:
        utils.addClass(target,'predictGameLeft');
        utils.addClass(target.nextElementSibling,'predictGameRight');
        break;
      case 2:
        utils.addClass(target,'predictGameRight');
        utils.addClass(target.previousElementSibling,'predictGameLeft');
        break;
      case 3:
        utils.addClass(target,'predictGameLeft');
        utils.addClass(target.nextElementSibling,'predictGameRight');
        break;
      case 4:
        utils.addClass(target,'predictGameRight');
        utils.addClass(target.previousElementSibling,'predictGameLeft');
        break;
      default:
        console.log('error');
    }
  }
  else{
    // 기존에 선택 했었음 => 취소
      switch (flag) {
        case 1:
          utils.removeClass(target,'predictGameLeft');
          utils.removeClass(target.nextElementSibling,'predictGameRight');
          break;
        case 2:
          utils.removeClass(target,'predictGameRight');
          utils.removeClass(target.previousElementSibling,'predictGameLeft');
          break;
        case 3:
          utils.removeClass(target,'predictGameLeft');
          utils.removeClass(target.nextElementSibling,'predictGameRight');
          break;
        case 4:
          utils.removeClass(target,'predictGameRight');
          utils.removeClass(target.previousElementSibling,'predictGameLeft');
          break;
        default:
          console.log('error');
      }
  }


  /* 2) pick text작업 */
  $('.pickPosi'+idx+'_'+y).text(game.away);

  /* 3) 베팅하기 부분 게임 추가 */
  if(idx==3){store.dispatch(actions.pickUp(game));}
  else if(idx==4){store.dispatch(actions.pickUp1(game));}
  else if(idx==5){store.dispatch(actions.pickUp2(game));}
  else{console.log('오늘 내일 내일모레가 아님!!');}

}


const calRtn = (home_odds, away_odds)=>{
  let rtn = 1/(1/home_odds+1/away_odds);
  return rtn*100;
}

var PredictGame = React.createClass({
  componentDidMount(){

  },
  render() {
    let idx = this.props.idx;
    let y = this.props.y;
    let game = this.props.game;
    let rtn = calRtn(game.home_odds,game.away_odds);
    let dispatch = this.props;

    return (
      <table className = 'predictGaTable'>
        <tbody>
          <tr>
            <td className='awayOdds' onClick={testClick.bind(this, game, idx, y)}>
              <div className='gameOdds'>{game.away_odds}</div>
              <div className='gameProbs'>{(rtn/game.away_odds).toFixed(1)+'%'}</div>
            </td>
            <td className='awayLogo' onClick={testClick.bind(this, game, idx, y)}>
              <img className='predictNBAlogo' src={'/image/teamLogo/'+game.away+'.gif'} ></img>
            </td>
            <td>
              9:14
            </td>
            <td className='homeLogo' onClick={testClick.bind(this, game, idx, y)}>
              <img className='predictNBAlogo' src={'/image/teamLogo/'+game.home+'.gif'} ></img>
            </td>
            <td className='homeOdds' onClick={testClick.bind(this, game, idx, y)}>
              <div className='gameOdds'>{game.home_odds}</div>
              <div className='gameProbs'>{(rtn/game.home_odds).toFixed(1)+'%'}</div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = PredictGame;
