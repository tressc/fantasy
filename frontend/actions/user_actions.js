import * as APIUtil from '../util/user_api_util';

// TODO: Add more actions as needed

export const RECEIVE_USER = 'RECEIVE_USER';
// export const UPDATE_USER = 'UPDATE_USER';
// export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = ({user, run_campaigns, member_campaigns}) => {
  return {
    type: RECEIVE_USER,
    user,
    run_campaigns,
    member_campaigns
  };
};

export const fetchUser = (id) => (dispatch) => {
  return APIUtil.getUser(id).then(payload => dispatch(receiveUser(payload)));
};
