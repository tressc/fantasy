import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, removeErrors, login } from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mdp = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(SignUpForm);
