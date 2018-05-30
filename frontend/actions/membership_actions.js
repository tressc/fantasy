import * as APIUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';

const receiveMembership = (membership) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership
  };
};

const removeMembership = (id) => {
  return {
    type: REMOVE_MEMBERSHIP,
    id
  };
};

export const createMembership = (membership) => (dispatch) => {
  return APIUtil.newMembership(membership).then(m => {
    dispatch(receiveMembership(m));
  });
};

export const destroyMembership = (id) => (dispatch) => {
  return APIUtil.destroyMembership(id).then(response => {
    dispatch(removeMembership(id));
  });
};
