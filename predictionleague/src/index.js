import React from 'react'
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers/reducers'
import routes from './routes'

require("./stylesheets/main.scss");
require("./stylesheets/header.scss");
require("./stylesheets/footer.scss");
require("./stylesheets/predict.scss");
require("./stylesheets/ranking.scss");
require("./stylesheets/myCareer.scss");


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);



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
