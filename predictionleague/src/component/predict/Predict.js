import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'
import PredictDetail from './PredictDetail'

//나중엔 서버에서 받아야 함
import data from '../../data/default'

var Predict = React.createClass({
  componentDidMount(){
    utils.naviColor('Predict');

    //경기 data 불러오기
    //한번에 불러오는게 괜찮을듯?
  },
  render() {
    //임시
    var data1 = data[0],
        data2 = data[1],
        data3 = data[2],
        data4 = data[3],
        data5 = data[4];
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
            <PredictDetail data={data1} />
          </div>
          <div id='predictTab2' className='predictTab tabContent'>
            <PredictDetail data={data2} />
          </div>
          <div id='predictTab3' className='predictTab tabContent tabClick'>
            <PredictDetail data={data3} />
          </div>
          <div id='predictTab4' className='predictTab tabContent'>
            <PredictDetail data={data4} />
          </div>
          <div id='predictTab5' className='predictTab tabContent'>
            <PredictDetail data={data5} />
          </div>
        </div>
        <div id='predictSummary'>
          2016.08.01 총 베팅금액: 100만원
        </div>
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#testModal">
          Launch demo modal
        </button>
      </div>
    );
  }
});

module.exports = Predict;
