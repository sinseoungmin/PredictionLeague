import React from 'react'
import { Link } from 'react-router'


var LoadingModal = React.createClass({
  render() {
    return (
      <div className="modal fade" id="loadingModal" tabIndex="-1" role="dialog" aria-labelledby="loadingModalLabel" aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header'>
              Loading...
            </div>
            <div className="modal-body">
              <div className='barLoader'></div>
            </div>
            <div className='modal-footer'>

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoadingModal;
