import React from 'react';
import { connect } from 'react-redux';
import Campaign from './campaign';

// TODO: finish after getting fetchCampaign working

const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const campaign = state.entities.campaign[ownProps.match.params.id];
  const validUsers = ? campaign
  return {
    currentUser,
    campaignId
  };
};

const mdp = (dispatch) => {
  return {

  };
};

export default connect(msp, mdp)(Campaign);
