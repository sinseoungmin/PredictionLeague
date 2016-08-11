import React from 'react'
import { Link } from 'react-router'


var EmailModal = React.createClass({
  render() {
    return (
      <div className="modal fade" id="emailModal" tabIndex="-1" role="dialog" aria-labelledby="emailModalLabel" aria-hidden="false">
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

module.exports = EmailModal;
