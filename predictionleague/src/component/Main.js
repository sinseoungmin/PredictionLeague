import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Header from './common/Header'
import Footer from './common/Footer'

var TodoApp = React.createClass({
  render() {
    return (
      <div id = 'container'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = TodoApp;
