import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'
import PredictGame from './PredictGame'

//나중엔 서버에서 받아야 함
import data from '../../data/default'

var PredictDetail = React.createClass({
  componentDidMount(){

  },
  render() {
    var data = this.props.data;
    return (
      <div id = 'predictDetailContainer'>
        <div id='predictType'>
          single / multi
        </div>
        <div id='availableMoney'>
          배팅 가능 금액: <span>10만원</span>
        </div>
        <div id='predictDate'>{data.date}</div>
        {data.games.map((game,index) =>{
          return(
            <PredictGame key={index} game={game} />
          );
        })}
      </div>
    );
  }
});

module.exports = PredictDetail;
