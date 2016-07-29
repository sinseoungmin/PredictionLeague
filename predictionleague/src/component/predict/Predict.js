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
        <div>
          <span>그제</span>
          <span>어제</span>
          <span>오늘</span>
          <span>내일</span>
          <span>모레</span>
        </div>
      </div>
    );
  }
});

module.exports = Predict;
