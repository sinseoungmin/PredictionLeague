import React from 'react'
import { Link } from 'react-router'

var Navi = React.createClass({
  render() {
    return (
      <div id='naviContainer'>
        <table id='naviTable'>
          <tbody>
            <tr>
              <td>
                <i className="fa fa-rocket fa-2x" aria-hidden="true"></i>
                <div className="size12">예측</div>
              </td>
              <td>
                <i className="fa fa-diamond fa-2x" aria-hidden="true"></i>
                <div className="size12">랭킹</div>
              </td>
              <td>
                <i className="fa fa-trophy fa-2x" aria-hidden="true"></i>
                <div className="size12">커리어</div>
              </td>
              <td>
                <i className="fa fa-commenting fa-2x" aria-hidden="true"></i>
                <div className="size12">토킹</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Navi;
