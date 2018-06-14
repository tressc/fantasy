import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import { REMOVE_MEMBERSHIP, RECEIVE_MEMBERSHIP } from '../actions/membership_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CAMPAIGN:
      const gmId = action.campaign.gm_id;
      const  newIds = state[gmId].run_campaign_ids.slice();
      if (!newIds.includes(action.campaign.id)) {
        newIds.push(action.campaign.id);
      }
      return merge({}, state, {[gmId]: {run_campaign_ids: newIds}});
    case RECEIVE_MEMBERSHIP:
    // TODO: 
      return state;
    case REMOVE_MEMBERSHIP:
      return;
    default:
      return state;
  }
};

export default userReducer;
