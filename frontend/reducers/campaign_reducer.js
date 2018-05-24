import { merge } from 'lodash';
import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';

const campaignReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      return merge({}, state, {[action.campaign.id]: action.campaign });
    default:
      return state;
  }
};

export default campaignReducer;
