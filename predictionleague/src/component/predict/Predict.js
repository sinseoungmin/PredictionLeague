import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

var Predict = React.createClass({
  componentDidMount(){
    utils.naviColor('Predict');
  },
  render() {
    return (
      <div id = 'predictContainer'>
        <h3> This is predict </h3>
      </div>
    );
  }
});

module.exports = Predict;
