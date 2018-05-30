import { merge } from 'lodash';
import {
  RECEIVE_MEMBERSHIP,
  REMOVE_MEMBERSHIP
} from '../actions/membership_actions';

const membershipReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIP:
      return merge({}, state, action.membership);
    case REMOVE_MEMBERSHIP:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default membershipReducer;
