import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import { REMOVE_MEMBERSHIP, RECEIVE_MEMBERSHIP, UPDATE_MEMBERSHIP } from '../actions/membership_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let oldPlayer;
  let idx;
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CAMPAIGN:
      newState = merge({}, state, action.players, action.gm);
      const gmId = action.campaign.gm_id;
      const  newIds = newState[gmId].run_campaign_ids.slice();
      if (!newIds.includes(action.campaign.id)) {
        newIds.push(action.campaign.id);
      }
      return merge({}, newState, {[gmId]: {run_campaign_ids: newIds}});
    case RECEIVE_MEMBERSHIP:
    // TODO: figure out why this is not working
      const player = state[action.player_id];
      if (player) {
        const pendings = player.pending_ids.slice();
        if (!pendings.includes(action.id)) {
          pendings.push(action.id);
        }
        return merge({}, state, {[action.player_id]: {pending_ids: pendings}});
      }
      // const newPlayer = state[action.player_id];
      // if (newPlayer) {
      //   const updatedCampaigns = newPlayer.campaign_ids.slice();
      //   if (!updatedCampaigns.includes(action.campaign_id)) {
      //     updatedCampaigns.push(action.campaign_id);
      //   }
      //   return merge({}, state, {[newPlayer.id]: {campaign_ids: updatedCampaigns}});
      // }
      return state;
    case REMOVE_MEMBERSHIP:
      newState = merge({}, state);
      oldPlayer = newState[action.membership.player_id];
      if (oldPlayer) {
        idx = oldPlayer.campaign_ids.indexOf(action.membership.campaign_id);
        if (idx) {
          newState[action.membership.player_id].campaign_ids.splice(idx, 1);
        } else {
          idx = oldPlayer.pending_ids.indexOf(action.membership.campaign_id);
          newState[action.membership.player_id].pending_ids.splice(idx, 1);
        }
      }
      return newState;
    case UPDATE_MEMBERSHIP:
      newState = merge({}, state);
      oldPlayer = newState[action.membership.player_id];
      if (oldPlayer) {
        idx = oldPlayer.pending_ids.indexOf(action.membership.campaign_id);
        newState[action.membership.player_id].pending_ids.splice(idx, 1);
        newState[action.membership.player_id].campaign_ids.push(action.membership.campaign_id);
      }
      return newState;
    default:
      return state;
  }
};

export default userReducer;
