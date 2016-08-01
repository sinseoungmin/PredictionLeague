import React from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import utils from '../../utils'

const homeClick = ()=>{
  //아래 네비 색 없애기
  let naviTd = document.getElementsByClassName("naviTd");
  for(var i=0; i<naviTd.length;  i++){
    utils.removeClass(naviTd[i],'naviClick');
  }

  browserHistory.push('/');
}

var Header = React.createClass({
  render() {
    return (
      <div id = 'headerContainer'>
        <div id = 'headTitle' onClick={homeClick}>
          <span className='inline' style={{fontSize:'20px', fontWeight: '400'}} > Prediction League </span>
          <i className="fa fa-user" aria-hidden="true"></i>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <i className="fa fa-unlock-alt" aria-hidden="true"></i>
        </div>
        <div id = 'headNav'>
        </div>
      </div>

    );
  }
});

module.exports = Header;
