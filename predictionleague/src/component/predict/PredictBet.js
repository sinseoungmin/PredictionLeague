import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router'
import utils from '../../utils'


var PredictBet = React.createClass({
  componentDidMount(){

  },
  render() {
    let type = this.props.type;
    let idx = this.props.idx;
    let pick = this.props.pick;

    if(idx == '5'){
      console.log('pick state 변경 시, rerender 되어야 하는 부분 ======');
      console.log(pick);
    }
    return (
      <div className='PredictBetContainer'>
        single 이든 multi 든
        <div>{type}</div>
      </div>
    );
  }
});

const mapStateToPredictBetProps = (state) =>{
  return {
    pick:
      state
  };
}

module.exports = connect(mapStateToPredictBetProps)(PredictBet);
