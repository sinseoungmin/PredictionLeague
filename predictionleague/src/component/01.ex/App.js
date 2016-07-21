import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

var TodoApp = React.createClass({
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <ul>
          <li><Link to="/repos">repos</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

module.exports = TodoApp;
