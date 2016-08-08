import React from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import utils from '../../utils'

const naviClick = (e) =>{
  //기존에 있던 네비 색 없애기
  let naviTd = document.getElementsByClassName("naviTd");
  for(var i=0; i<naviTd.length;  i++){
    utils.removeClass(naviTd[i],'naviClick');
  }

  //click된 네비 색 넣기
  if(e.target.tagName == 'TD'){utils.addClass(e.target, 'naviClick')}
  else{utils.addClass(e.target.parentNode, 'naviClick')}

  //해당 page로 이동
  let name = e.target.getAttribute('name');
  browserHistory.push('/'+ name);
}

var Navi = React.createClass({
  render() {
    return (
      <div id='naviContainer'>
        <table id='naviTable'>
          <tbody>
            <tr>
              <td name='predict' className='naviTd' id='naviPredict' onClick={naviClick}>
                <i name='predict' className="fa fa-rocket fa-2x size25" aria-hidden="true"></i>
                <div name='predict' className="size10">예측</div>
              </td>
              <td name='ranking' className='naviTd' id='naviRanking' onClick={naviClick}>
                <i name='ranking' className="fa fa-diamond fa-2x size25" aria-hidden="true"></i>
                <div name='ranking' className="size10">랭킹</div>
              </td>
              <td name='career' className='naviTd' id='naviCareer' onClick={naviClick}>
                <i name='career' className="fa fa-trophy fa-2x size25" aria-hidden="true"></i>
                <div name='career' className="size10">커리어</div>
              </td>
              <td name='talking' className='naviTd' id='naviTalking' onClick={naviClick}>
                <i name='talking' className="fa fa-commenting fa-2x size25" aria-hidden="true"></i>
                <div name='talking' className="size10">토킹</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Navi;
