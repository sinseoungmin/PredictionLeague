import React from 'react'
import { Link } from 'react-router'

var CircleLoader = React.createClass({
  render() {
    return (
      <div className="circle-loader">
          <div className="circle-loader-item circle-loader-moon"></div>
      </div>
    );
  }
});

module.exports = CircleLoader;
