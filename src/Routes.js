import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Home from './Home';
import Search from './Search';
import Forecast from './Forecast';

const Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Search}/>
      <Route path="forecast/:City" component={Forecast}/>
      
    </Route>

  </Router>
)

export default Routes;
