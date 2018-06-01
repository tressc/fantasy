import React from 'react';
import { connect } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../actions/campaign_actions';

// TODO: finish after getting fetchCampaign working

const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const campaign = state.entities.campaign[ownProps.match.params.id];
  const validUsers = ? campaign
  return {
    // currentUser,
    // campaignId
  };
};

const mdp = (dispatch) => {
  return {
    fetchCampaign: (id) => dispatch(fetchCampaign())
  };
};

export default connect(msp, mdp)(Campaign);
