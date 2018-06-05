import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  };
};

// TODO: deconstruct user data from jbuilder

const receiveCurrentUser = ({ user, run_campaigns, member_campaigns }) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    run_campaigns,
    member_campaigns
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const logout = () => (dispatch) => {
  return APIUtil.logOut().then(() => dispatch(logoutUser()));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signUp(user).then(u => {
    dispatch(receiveCurrentUser(u));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const login = (user) => (dispatch) => {
  return APIUtil.logIn(user).then(u => {
    dispatch(receiveCurrentUser(u));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
