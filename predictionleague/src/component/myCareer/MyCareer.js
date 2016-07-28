import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

var MyCareer = React.createClass({
  componentDidMount(){
    utils.naviColor('Career');
  },
  render() {
    return (
      <div id = 'myCareerContainer'>
        <h3> This is career </h3>
      </div>
    );
  }
});

module.exports = MyCareer;
