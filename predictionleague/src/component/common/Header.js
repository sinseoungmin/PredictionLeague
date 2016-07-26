import React from 'react'
import { Link } from 'react-router'

var Header = React.createClass({
  render() {
    return (
      <div id = 'headerContainer'>
        <div id = 'headTitle'>
          <span className='inline' style={{fontSize:'24px', fontWeight: '400'}} > Prediction League </span>
          <i className="fa fa-user" aria-hidden="true"></i>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <i className="fa fa-unlock-alt" aria-hidden="true"></i>
        </div>
        <div id = 'headNav'>
        </div>
      </div>

    );
  }
});

module.exports = Header;
