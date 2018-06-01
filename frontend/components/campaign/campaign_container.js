import React from 'react';
import { connect } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../../actions/campaign_actions';

const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const campaign = state.entities.campaigns[ownProps.match.params.id];
  const validUsers = campaign ? campaign.player_ids.push(campaign.gm_id) :
    [];
  return {
    currentUser,
    campaign,
    validUsers
  };
};

const mdp = (dispatch) => {
  return {
    fetchCampaign: (id) => dispatch(fetchCampaign(id))
  };
};

export default connect(msp, mdp)(Campaign);
