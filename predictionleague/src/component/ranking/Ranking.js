import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

var Ranking = React.createClass({
  componentDidMount(){
    utils.naviColor('Ranking');
  },
  render() {
    return (
      <div id = 'rankingContainer'>
        <h3> This is ranking </h3>
      </div>
    );
  }
});

module.exports = Ranking;
