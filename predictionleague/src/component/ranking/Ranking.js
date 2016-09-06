import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'
import IRanking from './IRanking'
import TRanking from './TRanking'

var Ranking = React.createClass({
  componentDidMount(){
    utils.naviColor('Ranking');
  },
  render() {
    return (
      <div id = 'rankingContainer'>
        <ul className='tabUl'>
          <li name='rankingLi1' className='rankingTab tabLi tabClick' onClick={utils.tabClick}>개인</li>
          <li name='rankingLi2' className='rankingTab tabLi' onClick={utils.tabClick}>팀</li>
        </ul>
        <div className='tabContainer'>
          <div id='rankingTab1' className='rankingTab tabContent tabClick'>
            <IRanking />
          </div>
          <div id='rankingTab2' className='rankingTab tabContent'>
            <TRanking />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Ranking;
