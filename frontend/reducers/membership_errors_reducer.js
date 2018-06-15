import {
  RECEIVE_MEMBERSHIP_ERRORS,
  RECEIVE_MEMBERSHIP,
  REMOVE_MEMBERSHIP_ERRORS
} from '../actions/membership_actions';

const membershipErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIP_ERRORS:
      return action.errors;
    case RECEIVE_MEMBERSHIP:
      return [];
    case REMOVE_MEMBERSHIP_ERRORS:
      return [];
    default:
      return state;
  }
};

export default membershipErrorsReducer;
