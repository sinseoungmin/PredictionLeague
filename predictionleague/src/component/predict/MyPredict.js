import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'


const upDownClick = (e) =>{

  let idx = document.getElementsByClassName('predictTab tabClick')[1].id.slice(-1);
  let myPEP = '.myPEP'+idx;
  let up = '.myPAup'+idx;
  let down = '.myPAdown'+idx;
  let contents = '.myPC'+idx;

  let flag = $(down).css('display') =='inline-block';

  if(!!flag){
    $(down).hide();
    $(up).show();
    $(contents).show();
    $(myPEP).css('box-shadow','none');
  }
  else{
    $(down).show();
    $(up).hide();
    $(contents).hide();
    $(myPEP).css('box-shadow','0px 2px 5px gray');
  }
}

var MyPredict = React.createClass({
  componentDidMount(){

  },
  render() {
    let idx = this.props.idx;
    let data = [
      {
        type:'복수',
        win:'cavs x sa x min x hou x det',
        odds:'2.1',
        stake:'30,000',
      },
      {
        type:'단일',
        win:'cavs',
        odds:'2.1',
        stake:'50,000',
      },
      {
        type:'단일',
        win:'sa',
        odds:'1.22',
        stake:'20,000',
      }

    ];
    let betNum = 10;

    return (
      <div className='MyPredictContainer'>
        <table className={'myPredictEP myPEP'+idx} onClick={upDownClick}>
          <tbody><tr>
            <td>베팅내역</td>
            <td>{betNum}</td>
            <td>
              <i className={"fa fa-chevron-down myPredictDown myPAdown"+idx} aria-hidden="true"></i>
              <i className={"fa fa-chevron-up myPredictUp myPAup"+idx} aria-hidden="true"></i>
            </td>
          </tr></tbody>
        </table>
        <div className={'myPredictContents myPC'+idx}>
          <table className='myPredictCTable'>
            <thead>
              <tr>
                <td>타입</td><td>승리팀</td><td>배당률</td><td>배팅금액</td><td></td>
              </tr>
            </thead>
            <tbody>
              {data.map((game,index) =>{
                return(
                  <tr key={index}>
                    <td>{game.type}</td>
                    <td>{game.win}</td>
                    <td>{game.odds}</td>
                    <td>{game.stake}</td>
                    <td>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = MyPredict;
/*
const mapStateToPredictProps = (state) =>{
  return {
    gameInfo:
      state.gameInfo
  };
}

module.exports = connect(mapStateToPredictProps)(Predict);
*/
