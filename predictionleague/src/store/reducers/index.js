import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import userReducer from './user.js';
import download from './download.js'

const rootReducer = combineReducers({
  gameInfo:download,
  auth:userReducer,
  routing
});

module.exports = rootReducer;
