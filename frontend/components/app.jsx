import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import SignUpFormContainer from './session/signup_form_container';
import LoginContainer from './session/login_form_container';
import IndexContainer from './index/index_container';
import NavContainer from './nav/nav_container';
import ProfileContainer from './profile/profile_container';

// TODO: backticks? also protect all non-login/signup routes

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/login' component= { LoginContainer } />
        <AuthRoute exact path='/signup' component= { SignUpFormContainer} />
        <ProtectedRoute path='/' component={ NavContainer } />
      </Switch>
      <ProtectedRoute exact path='/' component={ IndexContainer } />
      <ProtectedRoute path={`/users/:id`} component={ ProfileContainer } />
    </div>
  );
};

export default App;
