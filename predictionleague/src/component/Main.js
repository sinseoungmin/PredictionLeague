import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Header from './common/Header'
import Footer from './common/Footer'
import Navi from './common/Navi'
import Login from './common/Login'
import AlertModal from './common/AlertModal'


var Main = React.createClass({
  render() {
    return (
      <div id = 'mainContainer'>
        <Header />
        <div id='mainBody'>
          {this.props.children}
        </div>
        <Footer />
        <Navi />
        <AlertModal />
      </div>
    );
  }
});

module.exports = Main;
