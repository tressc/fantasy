import { merge } from 'lodash';
import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const campaignReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      return merge({}, state, {[action.campaign.id]: action.campaign });
    case RECEIVE_USER:
      return merge({}, state, action.run_campaigns, action.member_campaigns);
    default:
      return state;
  }
};

export default campaignReducer;
