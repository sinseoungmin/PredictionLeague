import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router'
import utils from '../../utils'
import actions from '../../actions'

import {store} from '../../index'


const gameClick = (game, idx, y, e)=>{

  let target;
  if(e.target.tagName == 'TD'){target = e.target;}
  else{target = e.target.parentNode;}

  let flag;
  let win;
  let odds;
  let counterTarget;
  if(target.className.indexOf('away') != -1){
    if(target.className.indexOf('Odds') != -1){
      flag = 1;
      counterTarget = target.nextElementSibling.nextElementSibling.nextElementSibling;
    }
    else{
      flag = 2;
      counterTarget = target.nextElementSibling.nextElementSibling;
    }
    win = game.away;
    odds = game.away_odds;
  }
  else{
    if(target.className.indexOf('Odds') != -1){
      flag = 4;
      counterTarget = target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    }
    else{
      flag = 3;
      counterTarget = target.previousElementSibling.previousElementSibling.previousElementSibling;
    }
    win = game.home;
    odds = game.home_odds;
  }

  //redux state에 저장될 object
  let pickedGame = {
    away:game.away,
    home:game.home,
    win:win,
    odds:odds
  };

  if(target.className.indexOf('predictGameLeft') == -1 && target.className.indexOf('predictGameRight') == -1){
    /* 1-1)기존에 선택 하지 않음 */

    /* 2-1)반대쪽을 선택 했었는지 확인 */
    if(counterTarget.className.indexOf('predictGameLeft') != -1){
      //css
      utils.removeClass(counterTarget,'predictGameLeft');
      utils.removeClass(counterTarget.nextElementSibling,'predictGameRight');
      //redux state
      if(idx==3){store.dispatch(actions.pickDown(pickedGame));}
      else if(idx==4){store.dispatch(actions.pickDown1(pickedGame));}
      else if(idx==5){store.dispatch(actions.pickDown2(pickedGame));}
    }

    /* 2)반대쪽 선택 했던 안했던, 클릭하면 진행되어야 하는 process */
    //css
    switch (flag) {
      case 1:
      case 3:
        utils.addClass(target,'predictGameLeft');
        utils.addClass(target.nextElementSibling,'predictGameRight');
        break;
      case 2:
      case 4:
        utils.addClass(target,'predictGameRight');
        utils.addClass(target.previousElementSibling,'predictGameLeft');
        break;
      default:
        console.log('error');
    }
    //text
    $('.pickPosi'+idx+'_'+y).text(win.toUpperCase());
    //redux
    if(idx==3){store.dispatch(actions.pickUp(pickedGame));}
    else if(idx==4){store.dispatch(actions.pickUp1(pickedGame));}
    else if(idx==5){store.dispatch(actions.pickUp2(pickedGame));}
  }
  else{
    /* 1-2) 기존에 선택 했었음 */
      //css
      switch (flag) {
        case 1:
        case 3:
          utils.removeClass(target,'predictGameLeft');
          utils.removeClass(target.nextElementSibling,'predictGameRight');
          break;
        case 2:
        case 4:
          utils.removeClass(target,'predictGameRight');
          utils.removeClass(target.previousElementSibling,'predictGameLeft');
          break;
        default:
          console.log('error');
      }
      //text
      $('.pickPosi'+idx+'_'+y).text('');
      //redux
      if(idx==3){store.dispatch(actions.pickDown(pickedGame));}
      else if(idx==4){store.dispatch(actions.pickDown1(pickedGame));}
      else if(idx==5){store.dispatch(actions.pickDown2(pickedGame));}
  }

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

    return (
      <table className = 'predictGaTable'>
        <tbody>
          <tr>
            <td className={'awayOdds awayOdds'+idx} onClick={gameClick.bind(this, game, idx, y)}>
              <div className='gameOdds'>{game.away_odds}</div>
              <div className='gameProbs'>{(rtn/game.away_odds).toFixed(1)+'%'}</div>
            </td>
            <td className={'awayLogo awayLogo'+idx} onClick={gameClick.bind(this, game, idx, y)}>
              <img className='predictNBAlogo' src={'/image/teamLogo/'+game.away+'.gif'} ></img>
            </td>
            <td>
              9:14
            </td>
            <td className={'homeLogo homeLogo'+idx} onClick={gameClick.bind(this, game, idx, y)}>
              <img className='predictNBAlogo' src={'/image/teamLogo/'+game.home+'.gif'} ></img>
            </td>
            <td className={'homeOdds homeOdds'+idx} onClick={gameClick.bind(this, game, idx, y)}>
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
