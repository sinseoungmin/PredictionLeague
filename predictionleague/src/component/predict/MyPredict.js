import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import utils from '../../utils'

import actions from '../../actions'
import {store} from '../../index'


const upDownClick = (e) =>{

  let idx = document.getElementsByClassName('predictTab tabClick')[1].id.slice(-1);
  let myPEP = '.myPEP'+idx;
  let up = '.myPAup'+idx;
  let down = '.myPAdown'+idx;
  let contents = '.myPC'+idx;

  let flag = $(down).css('display') =='inline-block';

  if(!!flag){
    $(down).hide();
    $(up).show();
    $(contents).show();
    $(myPEP).css('box-shadow','none');
  }
  else{
    $(down).show();
    $(up).hide();
    $(contents).hide();
    $(myPEP).css('box-shadow','0px 2px 5px gray');
  }
}


const singleDown = (userInfo, userPick, date, pick, idx, key)=>{
  /* firebase userPick DB && redux userPick에서
     해당 pick 삭제 and Balance 재설정 */
  let id = userInfo.id;
  let balance = Number(userPick.balance);

  firebase.database().ref('userPick/'+id+'/'+date+'/s/'+key).set(null);
  store.dispatch(actions.singleDown(idx-1, key));

  balance += Number(pick.stake);
  firebase.database().ref('userPick/'+id+'/'+date+'/balance').set(balance);
  store.dispatch(actions.calBalance(idx-1, balance));

}
const multiDown = (userInfo, userPick, date, pick, idx, key)=>{
  /* firebase userPick DB && redux userPick에서
     해당 pick 삭제 and Balance 재설정 */
  let id = userInfo.id;
  let balance = Number(userPick.balance);

  firebase.database().ref('userPick/'+id+'/'+date+'/m/'+key).set(null);
  store.dispatch(actions.multiDown(idx-1, key));

  balance += Number(pick.stake);
  firebase.database().ref('userPick/'+id+'/'+date+'/balance').set(balance);
  store.dispatch(actions.calBalance(idx-1, balance));

}


var MyPredict = React.createClass({
  componentDidMount(){

  },
  render() {
    let idx = this.props.idx;
    let userInfo = this.props.userInfo;
    let userPick = this.props.userPick[idx-1];
    let date = utils.getCurrentDate(idx-3);
    let multiPick = {};
    let singlePick = {};

    if(!userPick){
      return(<div></div>);
    }

    if(!!userPick.m){
      multiPick = userPick.m;
    }
    if(!!userPick.s){
      singlePick = userPick.s;
    }

    return (
      <div className='MyPredictContainer'>
        <table className={'myPredictEP myPEP'+idx} onClick={upDownClick}>
          <tbody><tr>
            <td>베팅내역</td>
            <td>{Object.keys(multiPick).length + Object.keys(singlePick).length}</td>
            <td>
              <i className={"fa fa-chevron-down myPredictDown myPAdown"+idx} aria-hidden="true"></i>
              <i className={"fa fa-chevron-up myPredictUp myPAup"+idx} aria-hidden="true"></i>
            </td>
          </tr></tbody>
        </table>
        <div className={'myPredictContents myPC'+idx}>
          <table className='myPredictCTable'>
            <thead>
              <tr>
                <td>타입</td><td>승리팀</td><td>배당률</td><td>배팅금액</td><td></td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(multiPick).map(function(key, index) {
                let pick = multiPick[key];
                return(
                  <tr key={index}>
                    <td>복수</td>
                    <td>
                      {Object.keys(pick.game).map(function(key,index){
                        let game = pick.game[key];
                        return(
                          <div key={index}>{game + ' and '}</div>
                        );
                      })}
                    </td>
                    <td>{pick.odds}</td>
                    <td>{pick.stake}</td>
                    <td>
                      <i className="fa fa-times"
                        onClick={multiDown.bind(this, userInfo, userPick, date, pick, idx, key)} aria-hidden="true"></i>
                    </td>
                  </tr>
                );
              })}
              {Object.keys(singlePick).map(function(key, index) {
                 let pick = singlePick[key];
                 return(
                   <tr key={index}>
                     <td>단일</td>
                     <td>{pick.win}</td>
                     <td>{pick.odds}</td>
                     <td>{pick.stake}</td>
                     <td>
                       <i className={"fa fa-times singleDown"+idx}
                         onClick={singleDown.bind(this, userInfo, userPick, date, pick, idx, key)} aria-hidden="true"></i>
                     </td>
                   </tr>
                 );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

const mapStateToMyPredictProps = (state) =>{
  return {
    userInfo:state.userInfo,
    userPick:state.userPick
  };
}

module.exports = connect(mapStateToMyPredictProps)(MyPredict);
