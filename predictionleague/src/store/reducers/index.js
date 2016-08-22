import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import userReducer from './user.js'
import download from './download.js'
import pickReducer from './pick.js'
import pickReducer1 from './pick1.js'
import pickReducer2 from './pick2.js'

const rootReducer = combineReducers({
  gameInfo:download,
  auth:userReducer,
  pick:pickReducer,
  pick1:pickReducer1,
  pick2:pickReducer2,
  routing
});

module.exports = rootReducer;
