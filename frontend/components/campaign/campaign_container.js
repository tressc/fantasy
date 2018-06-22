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
  const validUser = currentUser.campaign_ids.includes(parseInt(campaignId)) ||
    currentUser.run_campaign_ids.includes(parseInt(campaignId));
  const hasCampaign = campaign ? true : false;
  const memberships = state.entities.memberships;
  let isGm;
  let isPlayer;
  if (hasCampaign) {
    const allPlayers = campaign.active_player_ids.concat(campaign.pending_player_ids);
    if (campaign.gm_id === currentUser.id) {
      isGm = true;
    }
    if (allPlayers.includes(currentUser.id)) {
      isPlayer = true;
    }
  }
  return {
    currentUser,
    campaign,
    validUser,
    hasCampaign,
    memberships,
    isGm,
    isPlayer
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
