import React, { Component } from 'react';
import { Link } from 'react-router'
import utils from '../../utils'
import Player from './Player'
import Team from './Team'


class Ranking extends Component{
    state={
        isPlayer:true,
    }

    tabUlClick(e){
        console.log('클릭!!');
        let targetName = e.target.getAttribute('name');

        if(targetName=='p-ranking'){
            this.setState({
                isPlayer: true
            })
        }
        else{
            this.setState({
                isPlayer: false
            })
        }
    }

    componentDidMount(){
        utils.naviColor('Ranking');
    }

    render() {
        console.log('랜더')
        console.log(this.state.isPlayer)
        return (
            <div id = 'rankingContainer'>
                <ul className='tabUl'>
                    <li name='p-ranking'
                        className={'tabLi ' + (this.state.isPlayer ? 'tabClick':'')}
                        onClick={::this.tabUlClick}>
                        개인
                    </li>
                    <li name='t-ranking'
                        className={'tabLi ' + (this.state.isPlayer ? '':'tabClick')}
                        onClick={::this.tabUlClick}>
                        팀
                    </li>
                </ul>

                <div className='tabContainer'>
                    {this.state.isPlayer?
                        <Player />
                        :
                        <Team />
                    }
                </div>
            </div>
        );
    }
}

module.exports = Ranking;
