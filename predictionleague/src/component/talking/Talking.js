import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

var Talking = React.createClass({
  componentDidMount(){
    utils.naviColor('Talking');
  },
  render() {
    return (
      <div id = 'talkingContainer'>
        <h3> This is talking </h3>
      </div>
    );
  }
});

module.exports = Talking;
