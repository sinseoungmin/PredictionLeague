import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'
import PredictGame from './PredictGame'


var PredictDetail = React.createClass({
  componentDidMount(){

  },
  render() {
    console.log(this.props.data);
    return (
      <div id = 'predictDetailContainer'>
        123
        {/*
        <div id='predictInfo'>
          <div id='predictType'>
            <div id='predictS' className="p-type p-select"  >single</div>
            <div id='predictM' className="p-type"  >multi</div>
          </div>

          <div id='availableMoney' style={{fontSize:'15px', fontWeight:'400'}}>
            배팅 가능 금액: <span>10만원</span>
          </div>
          <div id='bettingMoney' style={{fontSize:'15px', fontWeight:'400'}}>
            배팅 금액:
          </div>
          <input type='text'></input>
        </div>
        <div id='predictDate'>{data.date}</div>
        {data.games.map((game,index) =>{
          return(
            <PredictGame key={index} game={game} />
          );
        })}
        */}
      </div>
    );
  }
});

module.exports = PredictDetail;
