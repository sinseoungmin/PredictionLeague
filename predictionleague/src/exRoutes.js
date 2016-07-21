import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './component/01.ex/App'

import Home from './component/01.ex/Home'
import About from './component/01.ex/About'
import Repos from './component/01.ex/Repos'
import Repo from './component/01.ex/Repo'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
  </Route>

)
