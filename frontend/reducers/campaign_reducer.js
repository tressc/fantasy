import { merge } from 'lodash';
import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../actions/membership_actions';

const campaignReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      return merge({}, state, {[action.campaign.id]: action.campaign });
    case RECEIVE_USER:
      return merge({}, state, action.run_campaigns, action.member_campaigns);
      case RECEIVE_MEMBERSHIP:
        const newCampaign = state[action.campaign_id];
        if (newCampaign) {
          const updatedPlayers = newCampaign.player_ids.slice();
          if (!updatedPlayers.includes(action.player_id)) {
            updatedPlayers.push(action.player_id);
          }
          return merge({}, state, {[newCampaign.id]: {player_ids: updatedPlayers}});
        }
        return state;
      case REMOVE_MEMBERSHIP:
        const newState = merge({}, state);
        const oldCampaign = newState[action.campaign_id];
        if (oldCampaign) {
          const updatedPlayers = oldCampaign.player_ids;
          const oldIndex = updatedPlayers.indexOf(action.player_id);
          updatedPlayers.splice(oldIndex, 1);
        }
        return newState;
    default:
      return state;
  }
};

export default campaignReducer;
