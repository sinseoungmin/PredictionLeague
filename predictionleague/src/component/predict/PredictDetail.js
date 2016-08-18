import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'
import PredictGame from './PredictGame'


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


var PredictDetail = React.createClass({
  componentDidMount(){

  },

  render() {
    //data 불러오기 전에는 loading 표시
    if(!this.props.data){
      return(
        <div className = 'predictDetailContainer'>
          <div className='predictDetailLoader'>
            <div className='circleLoader'></div>
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
          <table className='predictDeHead'>
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
          <div className='predictDeMain'>
            {data.map((game,index) =>{
              return(
                <PredictGame key={index} game={game} />
              );
            })}
            <div className='predictPicks'>
              {data.map((game,index) =>{
                return(
                  <div key={index}>
                    <div className='predictPicksDiv'>
                      cavs
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='predictDeBet'>
            <div className='predictType'>
              <div className={"pType pClick pT"+idx}  name='Single' onClick={pTypeClick}>single</div>
              <div className={"pType pT"+idx}  name='Multi' onClick={pTypeClick}>multi</div>
            </div>
            <div className='predictBetting'>
              <div id={'betSingle'+idx} className={'pTab pClick pT'+idx}>
                single
              </div>
              <div id={'betMulti'+idx} className={'pTab pT'+idx}>
                multi
              </div>
            </div>
          </div>
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
