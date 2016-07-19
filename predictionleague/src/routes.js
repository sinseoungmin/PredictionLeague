import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './component/App'
import About from './component/About'
import Repos from './component/Repos'
import Repo from './component/Repo'
import Home from './component/Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
  </Route>
)
