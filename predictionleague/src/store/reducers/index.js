import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import userReducer from './user.js'
import download from './download.js'
import pickReducer from './pick.js'
import pickReducer1 from './pick1.js'
import pickReducer2 from './pick2.js'
import userPickReducer from './userPick.js'

const rootReducer = combineReducers({
  userInfo:userReducer,
  gameInfo:download,
  pick:pickReducer,
  pick1:pickReducer1,
  pick2:pickReducer2,
  userPick:userPickReducer,
  routing
});

module.exports = rootReducer;
