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
  store.dispatch(actions.singleDown(idx-1, key, pick));

  balance += Number(pick.stake);
  firebase.database().ref('userPick/'+id+'/'+date+'/balance').set(balance);
  store.dispatch(actions.calBalance(idx-1, balance));

}


var MyPredict = React.createClass({
  componentDidMount(){
    /*  firebase db setting test
    firebase.database().ref('userPick/cjsdud/20160810/s/cle_sa').set({win:'cle', stake:'10,000', odds:'2.1',hit:'yet'});
    firebase.database().ref('userPick/cjsdud/20160811/s/cle_sa').set({win:'cle', stake:'10,000', odds:'2.1',hit:'yet'});
    firebase.database().ref('userPick/cjsdud/20160812/s/okc_gs').set({win:'gs', stake:'20,000', odds:'1.9',hit:'yet'});
    firebase.database().ref('userPick/cjsdud/20160812/s/cle_sa').set({win:'cle', stake:'10,000', odds:'2.1',hit:'yet'});
    firebase.database().ref('userPick/cjsdud/20160812/s/ny_chi').set({win:'chi', stake:'13,300', odds:'5.1',hit:'yet'});
    firebase.database().ref('userPick/cjsdud/20160813/s/cle_sa').set({win:'cle', stake:'10,000', odds:'2.1',hit:'yet'});
    firebase.database().ref('userPick/cjsdud/20160814/s/cle_sa').set({win:'cle', stake:'10,000', odds:'2.1',hit:'yet'});

    firebase.database().ref('userPick/cjsdud/20160812/m/0').set({
      game:['cle_sa_0','okc_gs_1','ny_chi_0'],
      stake:'10,000',
      odds:'2.1',
      hit:'yet'
    });
    firebase.database().ref('userPick/cjsdud/20160812/m/1').set({
      game:['por_hou_1','phi_lal_1'],
      stake:'40,000',
      odds:'12.1',
      hit:'yet'
    });
    firebase.database().ref('userPick/cjsdud/20160812/m/2').set({
      game:['lac_lal_0'],
      stake:'10,000',
      odds:'32.1',
      hit:'yet'
    });

    firebase.database().ref('userPick/cjsdud/20160810/balance').set('100000');
    firebase.database().ref('userPick/cjsdud/20160811/balance').set('1000');
    firebase.database().ref('userPick/cjsdud/20160812/balance').set('100000');
    firebase.database().ref('userPick/cjsdud/20160813/balance').set('10');
    firebase.database().ref('userPick/cjsdud/20160814/balance').set('2000');
    */

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
                      <i className="fa fa-times" aria-hidden="true"></i>
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
