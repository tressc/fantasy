import React from 'react';
import { connect } from 'react-redux';
import { fetchCampaign } from '../../actions/campaign_actions';
import {
  createMembership,
  destroyMembership,
  removeMembershipErrors
} from '../../actions/membership_actions';
import Campaign from './campaign';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.currentUser];
  const campaignId = ownProps.match.params.id;
  const campaign = state.entities.campaigns[campaignId];
  let validUser = currentUser.campaign_ids.includes(parseInt(campaignId)) ||
    currentUser.run_campaign_ids.includes(parseInt(campaignId));
  const hasCampaign = campaign ? true : false;
  const memberships = state.entities.memberships;
  let hasUsers = false;
  let hasMemberships = false;
  let isGm;
  let isActivePlayer;
  let isPendingPlayer;
  let activePlayers = [];
  let pendingPlayers = [];
  if (hasCampaign) {

    const allUsers = campaign.active_player_ids.concat(
      campaign.pending_player_ids
    );
    allUsers.forEach(id => {
      if (!Object.keys(state.entities.users).includes(String(id))) {
        hasUsers = false;
        return;
      }
      hasUsers = true;
    });
    if (campaign.gm_id === currentUser.id) {
      isGm = true;
    }
    if (campaign.active_player_ids.includes(currentUser.id)) {
      isActivePlayer = true;
    }
    if (campaign.pending_player_ids.includes(currentUser.id)) {
      isPendingPlayer = true;
    }
    if (isPendingPlayer) {
      validUser = true;
    }
  }
  if (hasUsers) {
    activePlayers = campaign.active_player_ids.map(id => {
      return state.entities.users[id];
    });
    pendingPlayers = campaign.pending_player_ids.map(id => {
      return state.entities.users[id];
    });
  }
  return {
    currentUser,
    campaign,
    validUser,
    hasCampaign,
    memberships,
    isGm,
    isActivePlayer,
    isPendingPlayer,
    campaignId,
    activePlayers,
    pendingPlayers,
  };
};

const mdp = (dispatch) => {
  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    createMembership: (membership) => dispatch(createMembership(membership)),
    destroyMembership: (id) => dispatch(destroyMembership(id)),
    removeMembershipErrors: () => dispatch(removeMembershipErrors())
  };
};

export default connect(msp, mdp)(Campaign);
