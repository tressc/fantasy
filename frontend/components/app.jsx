import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import SignUpFormContainer from './session/signup_form_container';

const App = () => {
  return (
    <Switch>
      <AuthRoute exact path='/signup' component= { SignUpFormContainer} />
    </Switch>
  );
};

export default App;
