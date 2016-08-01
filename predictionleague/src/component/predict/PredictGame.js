import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

//나중엔 서버에서 받아야 함
import data from '../../data/default'

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
