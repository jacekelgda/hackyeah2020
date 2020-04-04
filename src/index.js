import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Firebase, { FirebaseContext } from './components/Firebase';

import Main from './components/Main';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value={new Firebase()}>
      <App>
        <Switch>
          <Route exact path={'/'} component={Main} />
          <Redirect exact from="*" to={'/'} />
        </Switch>
      </App>
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById('root'),
);
