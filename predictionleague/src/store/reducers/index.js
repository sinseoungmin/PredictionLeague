import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import test from './test';
import user from './user';

const rootReducer = combineReducers({
  test,
  user,
  routing
});

module.exports = rootReducer;
