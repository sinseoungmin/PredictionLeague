import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router'
import utils from '../../utils'
import PredictDetail from './PredictDetail'


var Predict = React.createClass({

  componentDidMount(){
    utils.naviColor('Predict');
  },

  render() {
    console.log('predict render ===');
    let gameInfo='';
    if(!!this.props.gameInfo.gameInfo){
      gameInfo = this.props.gameInfo.gameInfo;
    };
    console.log(gameInfo);

    return (
      <div id = 'predictContainer'>
        <ul className='tabUl'>
          <li name='predictLi1' className='predictTab tabLi' onClick={utils.tabClick}>그제</li>
          <li name='predictLi2' className='predictTab tabLi' onClick={utils.tabClick}>어제</li>
          <li name='predictLi3' className='predictTab tabLi tabClick' onClick={utils.tabClick}>오늘</li>
          <li name='predictLi4' className='predictTab tabLi' onClick={utils.tabClick}>내일</li>
          <li name='predictLi5' className='predictTab tabLi' onClick={utils.tabClick}>모레</li>
        </ul>
        <div className='tabContainer'>
          <div id='predictTab1' className='predictTab tabContent'>
            <PredictDetail data={gameInfo[0]} />
          </div>
          <div id='predictTab2' className='predictTab tabContent'>
            <PredictDetail data={gameInfo[1]} />
          </div>
          <div id='predictTab3' className='predictTab tabContent tabClick'>
            <PredictDetail data={gameInfo[2]} />
          </div>
          <div id='predictTab4' className='predictTab tabContent'>
            <PredictDetail data={gameInfo[3]} />
          </div>
          <div id='predictTab5' className='predictTab tabContent'>
            <PredictDetail data={gameInfo[4]} />
          </div>
        </div>
        <div id='predictSummary'>
          2016.08.01 총 베팅금액: 100만원
        </div>

      </div>
    );
  }
});


const mapStateToPredictProps = (state) =>{
  return {
    gameInfo:
      state.gameInfo
  };
}

module.exports = connect(mapStateToPredictProps)(Predict);
