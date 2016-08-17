import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'


const calRtn = (home_odds, away_odds)=>{
  let rtn = 1/(1/home_odds+1/away_odds);
  return rtn*100;
}

var predictGame = React.createClass({
  componentDidMount(){

  },
  render() {
    let game = this.props.game;
    let rtn = calRtn(game.home_odds,game.away_odds);

    return (
      <table className = 'predictGameTable'>
        <tbody>
          <tr>
            <td>
              <div className='gameOdds'>{game.away_odds}</div>
              <div className='gameProbs'>{(rtn/game.away_odds).toFixed(1)+'%'}</div>
            </td>
            <td>
              <img className='predictNBAlogo' src={'/image/teamLogo/'+game.away+'.gif'} ></img>
            </td>
            <td>
              9:14
            </td>
            <td>
              <img className='predictNBAlogo' src={'/image/teamLogo/'+game.home+'.gif'} ></img>
            </td>
            <td>
              <div className='gameOdds'>{game.home_odds}</div>
              <div className='gameProbs'>{(rtn/game.home_odds).toFixed(1)+'%'}</div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = predictGame;
