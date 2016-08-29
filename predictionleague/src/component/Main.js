import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Header from './common/Header'
import Footer from './common/Footer'
import Navi from './common/Navi'
import LoginModal from './modal/LoginModal'
import LogoutModal from './modal/LogoutModal'
import JoinModal from './modal/JoinModal'
import AlertModal from './modal/AlertModal'
import LoadingModal from './modal/LoadingModal'

var Main = React.createClass({
  render() {
    if(!!this.props.children.props.route.path){
      let firstPath = this.props.children.props.route.path.split('/')[1];
      //console.log(firstPath);

      if(firstPath == 'secretEmail'){
        return(
          <div id = 'mainContainer'>
            {this.props.children}
          </div>
        );
      }
    }

    return (
      <div id = 'mainContainer'>
        <Header />
        <div id='mainBody'>
          {this.props.children}
        </div>
        <Footer />
        <Navi />
        <LoginModal />
        <LogoutModal />
        <JoinModal />
        <AlertModal />
        <LoadingModal />
      </div>
    );
  }
});

module.exports = Main;
