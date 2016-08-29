import React from 'react'
import { Link } from 'react-router'
import {store} from '../../index'

const logoutClick = ()=>{
  firebase.auth().signOut().then(function() {
    store.dispatch({type:'LOGOUT'});
    $('#logoutModal').modal('toggle');
  }, function(error) {
    console.log(error);
  });
}

const closeClick = ()=>{
  $('#logoutModal').modal('toggle');
}


var LoginModal = React.createClass({
  render() {
    return (
      <div className="modal fade" id='logoutModal' tabIndex="-1" role="dialog" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">로그아웃</h4>
            </div>
            <div className="modal-body">
              로그아웃 하시겠습니까?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default"  onClick={closeClick}>취소</button>
              <button type="button" className="btn btn-primary" onClick={logoutClick}>확인</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginModal;
