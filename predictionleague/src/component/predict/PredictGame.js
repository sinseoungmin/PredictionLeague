import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'


var predictGame = React.createClass({
  componentDidMount(){

  },
  render() {
    var game = this.props.game;
    return (
      <div id = 'predictGameContainer'>
        {game.home} vs {game.away}
      </div>
    );
  }
});

module.exports = predictGame;

//<img className='joinNBAlogo' src={'/image/teamLogo/'+url+'.gif'} ></img>
