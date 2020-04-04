import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import Main from './components/Main';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path={'/'} component={Main} />
        <Redirect exact from="*" to={'/'} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
