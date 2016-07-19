import React from 'react'
import NavLink from './NavLink'
import {browserHistory} from 'react-router'

export default React.createClass({
  handleSubmin(e){
    e.preventDefault();
    const userName = e.target.elements[0].value;
    const repo = e.target.elements[1].value;
    const path = '/repos/'+userName+'/'+repo;
    browserHistory.push(path);
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit = {this.handleSubmin}>
              <input type='text' placeholder='userName' /> / {' '}
              <input type='text' placeholder='repo' />{' '}
              <button type='submit'>go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
