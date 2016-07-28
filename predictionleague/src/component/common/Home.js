import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

var Home = React.createClass({
  componentDidMount(){
    utils.naviColor();
  },
  render() {
    return (
      <div id = 'homeContainer'>
        <h3> This is Home </h3>
        <form>
          First name:<br />
          <input type="text" name="firstname"></input><br />
          Last name:<br / >
          <input type="text" name="lastname"></input>
        </form>
      </div>
    );
  }
});

module.exports = Home;
