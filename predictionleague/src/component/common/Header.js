import React from 'react'
import { Link } from 'react-router'

var Header = React.createClass({
  render() {
    return (
      <div id = 'headerContainer'>
        <h1>
          헤더다 짜샤
          <ul>
            <li><Link to="/predict">predict</Link></li>
            <li><Link to="/ranking">ranking</Link></li>
            <li><Link to="/myCareer">my career</Link></li>
          </ul>
        </h1>
      </div>
    );
  }
});

module.exports = Header;
