import React from 'react'
import { Link } from 'react-router'

var AlertModal = React.createClass({
  render() {
    return (
      <div className="modal fade" id="alertModal" tabIndex="-1" role="dialog" aria-labelledby="alertModalLabel" aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div id='alertBody'>
                <div id='alertImg'></div>
                <p id='alertBody1'></p>
                <p id='alertBody2'></p>
              </div>
              <div id='buttons'>
                <button id='alertOK' className='button olley'>확인</button>
                <button id='alertCancel' className='button white'>취소</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AlertModal;
