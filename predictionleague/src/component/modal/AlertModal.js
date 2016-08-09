import React from 'react'
import { Link } from 'react-router'


var AlertModal = React.createClass({
  render() {
    return (
      <div className="modal fade" id="alertModal" tabIndex="-1" role="dialog" aria-labelledby="alertModalLabel" aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header'>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <div id='alertModalH'></div>
            </div>
            <div className="modal-body">
              <div id='alertModalB'></div>
            </div>
            <div className='modal-footer'>
              <div id='alertModalF'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AlertModal;

/*
$('#joinModal').modal({
  backdrop:'static',
  keyboard:false
});
*/
