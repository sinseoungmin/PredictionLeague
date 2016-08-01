import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

var Talking = React.createClass({
  componentDidMount(){
    utils.naviColor('Talking');
  },
  render() {
    return (
      <div id = 'talkingContainer'>
        <ul className='tabUl'>
          <li name='talkingLi1' className='talkingTab tabLi tabClick' onClick={utils.tabClick}>전략게시판</li>
          <li name='talkingLi2' className='talkingTab tabLi' onClick={utils.tabClick}>자유게시판</li>
        </ul>
        <div className='tabContainer'>
          <div id='talkingTab1' className='talkingTab tabContent tabClick'>this is 전략게시판</div>
          <div id='talkingTab2' className='talkingTab tabContent'>this is 자유게시판</div>
        </div>
      </div>
    );
  }
});

module.exports = Talking;
