import React from 'react'
import {connect} from 'react-redux'

let nextTodoId = 0;
let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = '';
      }}>
        Add button
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

module.exports = AddTodo;
