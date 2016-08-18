import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'


var PredictBet = React.createClass({
  componentDidMount(){

  },
  render() {
    let type = this.props.type;
    return (
      <div className='PredictBetContainer'>
        single 이든 multi 든
        <div>{type}</div>
      </div>
    );
  }
});

module.exports = PredictBet;
/*
const mapStateToPredictProps = (state) =>{
  return {
    gameInfo:
      state.gameInfo
  };
}

module.exports = connect(mapStateToPredictProps)(Predict);
*/
