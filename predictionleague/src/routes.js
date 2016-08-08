import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from './component/Main'
import Home from './component/common/Home'
import Predict from './component/predict/Predict'
import Ranking from './component/ranking/Ranking'
import Career from './component/career/Career'
import Talking from './component/talking/Talking'

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="/predict" component={Predict} />
    <Route path="/ranking" component={Ranking} />
    <Route path="/career" component={Career} />
    <Route path="/talking" component={Talking} />
  </Route>
)


/*

page 이동시 여기다 다 써야 됨

*/
