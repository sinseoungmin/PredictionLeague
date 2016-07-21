import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from './component/Main'
import Home from './component/common/Home'

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home} />
  </Route>

)


/*

page 이동시 여기다 다 써야 됨

*/
