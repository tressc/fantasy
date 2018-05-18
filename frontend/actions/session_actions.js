import * as APIUTil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};

// TODO: deconstruct user data from jbuilder

const receiveCurrentUser = ({ user }) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const logout = () => (dispatch) => {
  return APIUTil.logout().then(() => dispatch(logoutUser()));
};

export const signup = (user) => (dispatch) => {
  return APIUTil.signUp(user).then(u => {
    dispatch(receiveCurrentUser(u));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const login = (user) => (dispatch) => {
  return APIUTil.logIn(user).then(u => {
    dispatch(receiveCurrentUser(u));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
