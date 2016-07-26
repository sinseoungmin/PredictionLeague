import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Header from './common/Header'
import Footer from './common/Footer'
import Navi from './common/Navi'

var TodoApp = React.createClass({
  render() {
    return (
      <div id = 'mainContainer'>
        <Header />
        <div id='mainBody'>
          {this.props.children}
        </div>
        <Footer />
        <Navi />
      </div>
    );
  }
});

module.exports = TodoApp;
