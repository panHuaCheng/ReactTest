import React from 'react';
import { Provider } from 'react-redux'
import store from './utils/store'
import './App.css';

import Layout from './views/Layout';
import Login from './views/Login';

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/layout' component={Layout} />
            <Redirect exact from='/' to='/login' />
          </Switch>
        </HashRouter>
      </Provider>

    </div>
  );
}

export default App;
