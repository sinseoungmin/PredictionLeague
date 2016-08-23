import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router'
import utils from '../../utils'


const pTypeClick = (e) =>{

  let idx = document.getElementsByClassName('predictTab tabClick')[1].id.slice(-1);

  //tab과 contents class 제거
  let allTab = document.getElementsByClassName('pT'+idx);
  for(var i=0; i<allTab.length;  i++){
    utils.removeClass(allTab[i],'pClick');
  }

  //click 된 element 대해서 처리
  let targetName = e.target.getAttribute('name');

  utils.addClass(e.target, 'pClick');
  utils.addClass(document.getElementById('bet'+targetName+idx), 'pClick');
}

var PredictBet = React.createClass({
  componentDidMount(){

  },
  render() {
    let idx = this.props.idx;
    let pick = this.props.pick;

    if(idx < 3){
      return(<div></div>);
    }
    else{
      return (
        <div className='predictBetContainer'>
          <div className='predictType'>
            <div className={"pType pClick pT"+idx}  name='Single' onClick={pTypeClick}>single</div>
            <div className={"pType pT"+idx}  name='Multi' onClick={pTypeClick}>multi</div>
          </div>
          <div className='predictBetting'>
            <div id={'betSingle'+idx} className={'pTab pClick pT'+idx}>
              싱글싱슬
            </div>
            <div id={'betMulti'+idx} className={'pTab pT'+idx}>
              멀티멀티
            </div>
          </div>
        </div>
      );
    }
  }
});

const mapStateToPredictBetProps = (state) =>{
  return {
    pick:
      state
  };
}

module.exports = connect(mapStateToPredictBetProps)(PredictBet);
