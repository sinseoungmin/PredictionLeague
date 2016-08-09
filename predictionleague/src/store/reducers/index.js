import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import test from './test.js';
import userReducer from './user.js';

const rootReducer = combineReducers({
  //test,
  auth:userReducer,
  routing
});

module.exports = rootReducer;
