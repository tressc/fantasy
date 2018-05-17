import * as APIUTil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const logout = () => (dispatch) => {
  return APIUTil.logout().then(() => dispatch(logoutUser()));
};
