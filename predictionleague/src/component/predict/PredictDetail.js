import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'
import PredictGame from './PredictGame'
import PredictBet from './PredictBet'
import MyPredict from './MyPredict'
import CircleLoader from '../common/CircleLoader'


var PredictDetail = React.createClass({
  componentDidMount(){

  },

  render() {
    //data 불러오기 전에는 loading 표시
    //if(!this.props.data){
    if(true){
      return(
        <div className = 'predictDetailContainer'>
          <div className='predictDetailLoader'>
            <CircleLoader />
            <div className='predictDetailLoaderText'>
              Loading...
            </div>
          </div>
        </div>
      );
    }
    else{
      let data = this.props.data;
      let idx = this.props.idx;

      //베팅가능금액 -> 어떻게 가져올지 생각해야 함
      let amount = '100,000';

      return (
        <div className='predictDetailContainer'>

          <MyPredict idx={idx}/>

          <table className='predictDeHead'>
            <tbody>
              <tr>
                <td>원정팀</td>
                <td>vs</td>
                <td>홈팀</td>
                <td> </td>
                <td>
                    {idx<3? '승리' : 'Pick'}
                </td>
              </tr>
            </tbody>
          </table>
          <div className='predictDeMain'>
            {data.map((game,index) =>{
              return(
                <PredictGame key={index} game={game} idx={idx} y={index}/>
              );
            })}
            <div className='predictPicks'>
              {data.map((game,index) =>{
                return(
                  <div key={index} className={'predictPicksDiv '+'predictPicksDiv'+idx+' pickPosi'+idx+'_'+index}></div>
                );
              })}
            </div>
          </div>

          <PredictBet idx={idx} />

          <div className='predictDeSummary'>
            <div>## predict summary ##</div>
            <div>참가자 수:</div>
            <div>전체 배팅금액:</div>
            <div>인기 경기:</div>
            <div>최고 배당률?:</div>
            <div>블라블라블라</div>
          </div>
        </div>
      );
    }
  }
});

module.exports = PredictDetail;

/*
const mapStateToPredictProps = (state) =>{
  return {
    gameInfo:
      state.gameInfo
  };
}

module.exports = connect(mapStateToPredictProps)(Predict);
*/
