import * as APIUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';

const receiveMembership = (membership) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership
  };
};

const removeMembership = (membership) => {
  return {
    type: REMOVE_MEMBERSHIP,
    membership
  };
};

export const createMembership = (membership) => (dispatch) => {
  return APIUtil.newMembership(membership).then(m => {
    dispatch(receiveMembership(m));
  });
};

export const destroyMembership = (id) => (dispatch) => {
  return APIUtil.destroyMembership(id).then(membership => {
    dispatch(removeMembership(membership));
  });
};
