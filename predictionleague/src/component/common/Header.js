import React from 'react'
import {connect} from 'react-redux';
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

const loginClick = ()=>{
  console.log('로그인');
  //$('#loginModal').modal();
  $('#joinModal').modal();
}

var Header = React.createClass({
  render() {
    console.log('header에 있는 state');
    console.log(this.props.currentState);
    return (
      <div id = 'headerContainer'>
        <div id = 'headTitle'>
          <i className="fa fa-bolt"  onClick={homeClick} style={{fontSize:'20px', color:'yellow'}} aria-hidden="true"></i>
          <span className='inline'  onClick={homeClick} style={{fontSize:'20px', fontWeight: '400'}} > Prediction League </span>
          <i id='menuIcon' onClick={loginClick} className="fa fa-unlock-alt" style={{fontSize:'24px'}} aria-hidden="true"></i>
        </div>
        <div id = 'headNav'>
        </div>
      </div>

    );
  }
});

const mapStateToHeaderProps = (state) =>{
  return {
    currentState:
      state
  };
}

module.exports = connect(mapStateToHeaderProps)(Header);
/*
<i className="fa fa-user" aria-hidden="true"></i>
<i className="fa fa-lock" aria-hidden="true"></i>
<i className="fa fa-unlock-alt" aria-hidden="true"></i>
*/
