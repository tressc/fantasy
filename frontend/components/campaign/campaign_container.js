import React from 'react';
import { connect } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../../actions/campaign_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.currentUser];
  const campaignId = ownProps.match.params.id;
  const campaign = state.entities.campaigns[campaignId];
  const validUser = currentUser.campaign_ids.includes(parseInt(campaignId)) ||
    currentUser.run_campaign_ids.includes(parseInt(campaignId));
  const hasCampaign = campaign ? true : false;
  return {
    currentUser,
    campaign,
    validUser,
    hasCampaign
  };
};

const mdp = (dispatch) => {
  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id))
  };
};

export default connect(msp, mdp)(Campaign);
