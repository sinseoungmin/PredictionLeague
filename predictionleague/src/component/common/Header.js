import React from 'react'
import { Link } from 'react-router'

var Header = React.createClass({
  render() {
    return (
      <div id = 'headerContainer'>
        <div id = 'headTitle'>
          <img id="mainImg"  className='inline relative' src='/image/trophy.png' className='block' />
          <span className='inline relative' style={{fontSize:'25px', fontWeight: '700', marginLeft:"10px"}} > Prediction League </span>
        </div>
        <div id = 'headNav'>
        </div>
      </div>

    );
  }
});

module.exports = Header;
