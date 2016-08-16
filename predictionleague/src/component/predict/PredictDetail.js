import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'
import PredictGame from './PredictGame'


var PredictDetail = React.createClass({
  componentDidMount(){

  },

  render() {
    if(!this.props.data){
      return(
        <div id = 'predictDetailContainer'>
          <div id='predictDetailLoader'>
            <div className='circleLoader'></div>
            <div id='predictDetailLoaderText'>
              Loading...
            </div>
          </div>
        </div>
      );
    }
    else{
      let data = this.props.data;

      //베팅가능금액 -> 어떻게 가져올지 생각해야 함
      let amount = '100,000';

      return (
        <div id = 'predictDetailContainer'>
          <div id='predictInfo'>
            <div id='predictType'>
              <div id='predictS' className="p-type p-select"  >single</div>
              <div id='predictM' className="p-type"  >multi</div>
            </div>

            <div id='availableMoney' style={{fontSize:'15px', fontWeight:'400'}}>
              배팅 가능 금액: <span>{amount}</span>
            </div>
            <div id='bettingMoney' style={{fontSize:'15px', fontWeight:'400'}}>
              배팅 금액:
            </div>
            <input type='text'></input>
          </div>
          {data.map((game,index) =>{
            return(
              <PredictGame key={index} game={game} />
            );
          })}
        </div>
      );
    }
  }
});

module.exports = PredictDetail;
