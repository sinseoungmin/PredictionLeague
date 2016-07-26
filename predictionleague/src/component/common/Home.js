import React from 'react'
import { Link } from 'react-router'

var Home = React.createClass({
  render() {
    return (
      <div id = 'homeContainer'>
        <h1> 본문 </h1>
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
