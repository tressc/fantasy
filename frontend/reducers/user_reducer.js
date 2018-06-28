import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import { REMOVE_MEMBERSHIP, RECEIVE_MEMBERSHIP, UPDATE_MEMBERSHIP } from '../actions/membership_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let oldPlayer;
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
      const player = state[action.membership.player_id];
      if (player) {
        const pendings = player.pending_ids.slice();
        if (!pendings.includes(action.membership.id)) {
          pendings.push(action.membership.id);
        }
        return merge({}, state, {[action.membership.player_id]: {pending_ids: pendings}});
      } else {
        return merge({}, state, {[action.user.id]: action.user});
      }
    case REMOVE_MEMBERSHIP:
      newState = merge({}, state);
      oldPlayer = newState[action.membership.player_id];
      if (oldPlayer) {
        let idx1 = oldPlayer.pending_ids.indexOf(action.membership.id);
        let idx2 = oldPlayer.campaign_ids.indexOf(action.membership.campaign_id);
        if (idx1 !== -1) {
          newState[action.membership.player_id].pending_ids.splice(idx1, 1);
        } else {
          newState[action.membership.player_id].campaign_ids.splice(idx2, 1);
        }
      }
      return newState;
    case UPDATE_MEMBERSHIP:
      newState = merge({}, state);
      oldPlayer = newState[action.membership.player_id];
      if (oldPlayer) {
        let idx3 = oldPlayer.pending_ids.indexOf(action.membership.campaign_id);
        newState[action.membership.player_id].pending_ids.splice(idx3, 1);
        newState[action.membership.player_id].campaign_ids.push(action.membership.campaign_id);
      }
      return newState;
    default:
      return state;
  }
};

export default userReducer;
