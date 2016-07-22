import React from 'react'
import { Link } from 'react-router'

var Header = React.createClass({
  render() {
    return (
      <div id = 'headerContainer'>
        <img id="mainImg"  className='inline' src='/image/trophy.png' className='block left' />
        <div className='block left' style={{fontSize:'25px', fontWeight: '700', marginLeft:"10px"}} > Prediction League </div>
      </div>
    );
  }
});

module.exports = Header;
