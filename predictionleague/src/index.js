import React from 'react'
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore';
import firebase_init from './firebase_init';
import routes from './routes'


require("./stylesheets/main.scss");
require("./stylesheets/fonts/_notosans.scss");

export const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

firebase_init(store);

ReactDOM.render(
  // The top-level Provider is what allows us to `connect` components to the store
	// using ReactRedux.connect
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
