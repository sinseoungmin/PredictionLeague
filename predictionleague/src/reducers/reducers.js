import React from 'react'
import { combineReducers } from 'redux'


const test = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};


module.exports = test;

/* for example
  import todos from './01.ex/todos';
  import visibilityFilter from './01.ex/visibilityFilter';
  const todoApp = combineReducers({
    todos,
    visibilityFilter
  });
*/

/*
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  routing
});

module.exports = rootReducer;
*/
