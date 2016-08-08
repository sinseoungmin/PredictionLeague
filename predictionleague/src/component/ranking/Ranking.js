import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

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
            내정보
          </div>
          <div id='rankingTab2' className='rankingTab tabContent'>
            베팅
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Ranking;
