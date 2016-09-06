import React from 'react';
import {render} from 'react-dom';
import Routes from './Routes';
import {Router, browserHistory} from 'react-router';
import Home from './Home';
import './index.css';

render(
  <Router routes={Routes} history={browserHistory}/>,
  document.getElementById('root')
)
