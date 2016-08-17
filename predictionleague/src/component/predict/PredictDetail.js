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
          <table id='predictTableHead'>
            <tbody>
              <tr>
                <td>Away</td>
                <td>vs</td>
                <td>Home</td>
                <td> </td>
                <td>Pick</td>
              </tr>
            </tbody>
          </table>
          <div id='predictMain'>
            {data.map((game,index) =>{
              return(
                <PredictGame key={index} game={game} />
              );
            })}
            <div id='predictPicks'>
              {data.map((game,index) =>{
                return(
                  <div key={index}>
                    <div className='predictPicksDiv'>
                      cavs
                    </div>
                    <div className='predictPicksOper'></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id='predictInfo'>
            <div id='predictAmount'>
              금액
              <input type='text'></input>
              /
              <span>{amount}</span>
            </div>
            <div id='predictType'>
              <div id='predictS' className="p-type p-select"  >single</div>
              <div id='predictM' className="p-type"  >multi</div>
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = PredictDetail;
