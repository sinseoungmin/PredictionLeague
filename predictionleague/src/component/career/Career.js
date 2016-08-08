import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

var Career = React.createClass({
  componentDidMount(){
    utils.naviColor('Career');
  },
  render() {
    return (
      <div id = 'careerContainer'>
        <ul className='tabUl'>
          <li name='careerLi1' className='careerTab tabLi tabClick' onClick={utils.tabClick}>커리어</li>
          <li name='careerLi2' className='careerTab tabLi' onClick={utils.tabClick}>베팅내역</li>
        </ul>
        <div className='tabContainer'>
          <div id='careerTab1' className='careerTab tabContent tabClick'>
            내정보
          </div>
          <div id='careerTab2' className='careerTab tabContent'>
            베팅
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Career;
