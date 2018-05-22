import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import SignUpFormContainer from './session/signup_form_container';
import IndexContainer from './index/index_container';
import NavContainer from './nav/nav_container';

// TODO: backticks? also protect all non-login/signup routes

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component= { SignUpFormContainer} />
        <ProtectedRoute path='/' component={ NavContainer } />
      </Switch>
      <ProtectedRoute exact path='/' component={ IndexContainer } />
    </div>
  );
};

export default App;
