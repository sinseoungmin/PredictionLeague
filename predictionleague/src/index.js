import React from 'react'
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import store from './store'
import actions from './actions'
import routes from './routes'

require("./stylesheets/main.scss");
require("./stylesheets/fonts/_notosans.scss");


ReactDOM.render(
  // The top-level Provider is what allows us to `connect` components to the store
	// using ReactRedux.connect
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

// setup Firebase listeners
setTimeout(function(){
	store.dispatch( actions.startListeningToAuth() );
	store.dispatch( actions.startListeningToQuotes() );
});



/* example
  import routes from './exRoutes'
  import reducers from './reducers/01.ex/exReducer'
/*


/*  react-router 와 redux 연동
  const store = createStore(
    combineReducers ({
      ...reducers,
      routing: routerReducer
    })
  )

  const history = syncHistoryWithStore(browserHistory, store)

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('root')
  )
*/
