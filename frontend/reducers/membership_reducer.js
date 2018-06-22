import { merge } from 'lodash';
import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import {
  RECEIVE_MEMBERSHIP,
  REMOVE_MEMBERSHIP,
  UPDATE_MEMBERSHIP
} from '../actions/membership_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const membershipReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIP:
      return merge({}, state, action.membership);
    case UPDATE_MEMBERSHIP:
      return merge({}, state, action.membership);
    case REMOVE_MEMBERSHIP:
      let newState = merge({}, state);
      delete newState[action.membership.id];
      return newState;
    case RECEIVE_CAMPAIGN:
      return merge({}, state, action.memberships);
    case RECEIVE_USER:
      return merge({}, state, action.memberships);
    default:
      return state;
  }
};

export default membershipReducer;
