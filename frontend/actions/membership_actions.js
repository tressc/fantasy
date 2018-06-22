import * as APIUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';
export const RECEIVE_MEMBERSHIP_ERRORS = 'RECEIVE_MEMBERSHIP_ERRORS';
export const REMOVE_MEMBERSHIP_ERRORS = 'REMOVE_MEMBERSHIP_ERRORS';
export const UPDATE_MEMBERSHIP = 'UPDATE_MEMBERSHIP';

const receiveMembership = (membership) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership
  };
};

const updateMembership = (membership) => {
  return {
    type: UPDATE_MEMBERSHIP,
    membership
  };
};

const removeMembership = (membership) => {
  return {
    type: REMOVE_MEMBERSHIP,
    membership
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_MEMBERSHIP_ERRORS,
    errors
  };
};

export const removeMembershipErrors = () => {
  return {
    type: REMOVE_MEMBERSHIP_ERRORS
  };
};

export const createMembership = (membership) => (dispatch) => {
  return APIUtil.newMembership(membership).then(m => {
    dispatch(receiveMembership(m));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const destroyMembership = (id) => (dispatch) => {
  return APIUtil.destroyMembership(id).then(membership => {
    dispatch(removeMembership(membership));
  });
};

export const approveMembership = (id) => (dispatch) => {
  return APIUtil.approveMembership(id).then(membership => {
    dispatch(updateMembership(membership));
  });
};
