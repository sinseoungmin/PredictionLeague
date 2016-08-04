import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Header from './common/Header'
import Footer from './common/Footer'
import Navi from './common/Navi'
import Login from './common/Login'
import LoginModal from './modal/LoginModal'
import JoinModal from './modal/JoinModal'

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
        <LoginModal />
        <JoinModal />
      </div>
    );
  }
});

module.exports = Main;
