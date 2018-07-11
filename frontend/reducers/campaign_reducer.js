import { merge } from 'lodash';
import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import {
  RECEIVE_MEMBERSHIP,
  REMOVE_MEMBERSHIP,
  UPDATE_MEMBERSHIP
} from '../actions/membership_actions';
import {
  REMOVE_FOLDER
} from '../actions/folder_actions';

const campaignReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let oldCampaign;
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      return merge({}, state, {[action.campaign.id]: action.campaign });
    case RECEIVE_USER:
      return merge({}, state, action.run_campaigns, action.member_campaigns);
      case RECEIVE_MEMBERSHIP:
        const newCampaign = state[action.membership.campaign_id];
        if (newCampaign) {
          const updatedPlayers = newCampaign.pending_player_ids.slice();
          if (!updatedPlayers.includes(action.player_id)) {
            updatedPlayers.push(action.membership.player_id);
          }
          return merge({}, state, {[newCampaign.id]: {pending_player_ids: updatedPlayers}});
        }
        return state;
      case REMOVE_MEMBERSHIP:
        newState = merge({}, state);
        oldCampaign = newState[action.membership.campaign_id];
        if (oldCampaign) {
          let idx1 = oldCampaign.pending_player_ids.indexOf(action.membership.player_id);
          let idx2 = oldCampaign.active_player_ids.indexOf(action.membership.player_id);
          if (idx1 !== -1) {
            newState[action.membership.campaign_id].pending_player_ids.splice(idx1, 1);
          } else {
            newState[action.membership.campaign_id].active_player_ids.splice(idx2, 1);
          }
        }
        return newState;
      case UPDATE_MEMBERSHIP:
        newState = merge({}, state);
        oldCampaign = newState[action.membership.campaign_id];
        const player_id = action.membership.player_id;
        if (oldCampaign) {
          const index = oldCampaign.pending_player_ids.indexOf(player_id);
          newState[action.membership.campaign_id].active_player_ids.push(player_id);
          newState[action.membership.campaign_id].pending_player_ids.splice(index, 1);
        }
        return newState;
      case REMOVE_FOLDER:
        newState = merge({}, state);
        const campaign = newState[action.folder.campaign_id];
        if (campaign) {
          const folders = campaign.folder_ids;
          for (let i = 0; i < folders.length; i++) {
            if (folders[i] === action.folder.id) {
              newState[action.folder.campaign_id].folder_ids.splice(i, 1);
            }
          }
          return newState;
        }
        return state;
    default:
      return state;
  }
};

export default campaignReducer;
