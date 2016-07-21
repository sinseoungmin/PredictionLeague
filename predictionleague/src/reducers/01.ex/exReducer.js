import React from 'react'
import { combineReducers } from 'redux'

import todos from './01.ex/todos';
import visibilityFilter from './01.ex/visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

module.exports = todoApp;



/*
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  routing
});

module.exports = rootReducer;
*/
