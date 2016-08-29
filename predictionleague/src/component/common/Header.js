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
  $('#loginModal').modal();
  //$('#joinModal').modal();
}
const logoutClick = ()=>{
  console.log('클릭');
  $('#logoutModal').modal();
}

var Header = React.createClass({
  componentDidMount(){
    /* gameInfo setting
      var rawData = basic;
      console.log('여기여기');
      console.log(rawData);

      Object.keys(rawData).map(function(key, index) {
        let gameList = rawData[key];
        firebase.database().ref('gameInfo/'+key).set(gameList);
      });
    */
  },
  render() {
    console.log('header에 있는 state');
    console.log(this.props.currentState);
    let loginFlag = this.props.currentState.login;
    return (
      <div id = 'headerContainer'>
        <div id = 'headTitle'>
          <i className="fa fa-bolt"  onClick={homeClick} style={{fontSize:'20px', color:'yellow'}} aria-hidden="true"></i>
          <span className='inline'  onClick={homeClick} style={{fontSize:'20px', fontWeight: '400'}} > Prediction League </span>
          {
            loginFlag? <i id='menuIcon' onClick={logoutClick} className="fa fa-user" style={{fontSize:'22px'}} aria-hidden="true"></i>
            : <i id='menuIcon' onClick={loginClick} className="fa fa-unlock" style={{fontSize:'22px'}} aria-hidden="true"></i>
          }
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
      state.userInfo
  };
}

module.exports = connect(mapStateToHeaderProps)(Header);
/*
<i className="fa fa-user" aria-hidden="true"></i>
<i className="fa fa-lock" aria-hidden="true"></i>
<i className="fa fa-unlock-alt" aria-hidden="true"></i>
*/
