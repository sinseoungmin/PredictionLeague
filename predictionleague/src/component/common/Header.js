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
        <div id = 'headTitle'>
          <i className="fa fa-bolt"  onClick={homeClick} style={{fontSize:'20px', color:'yellow'}} aria-hidden="true"></i>
          <span className='inline'  onClick={homeClick} style={{fontSize:'20px', fontWeight: '400'}} > Prediction League </span>
          <i id='menuIcon' className="fa fa-unlock-alt" style={{fontSize:'24px'}} aria-hidden="true"></i>
        </div>
        <div id = 'headNav'>
        </div>
      </div>

    );
  }
});

module.exports = Header;

/*
<i className="fa fa-user" aria-hidden="true"></i>
<i className="fa fa-lock" aria-hidden="true"></i>
<i className="fa fa-unlock-alt" aria-hidden="true"></i>
*/
