import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

var Career = React.createClass({
  componentDidMount(){
    utils.naviColor('Career');
  },
  render() {
    return (
        <div id = 'careerContainer'>
            
            <div id='finder'>
                <input
                    id='finderInput'
                    type='text'
                    placeholder='닉네임으로 검색'
                ></input>
                <i id='finderIcon'
                    className="fa fa-search"
                    onClick={()=>{console.log('서치')}}
                    aria-hidden="true"
                ></i>
            </div>

            <div id='careerContents'>
                커리어 내용 들어가야 됨
            </div>
        </div>
    );
  }
});

module.exports = Career;
