import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  const currentUserId = state.session.currentUser;
  const currentUser = state.entities.users[currentUserId];
  const runCampaigns = currentUser.run_campaign_ids.map(id => {
    return state.entities.campaigns[id];
  });
  const memberCampaigns = currentUser.campaign_ids.map(id => {
    return state.entities.campaigns[id];
  });
  debugger
  return {
    userId,
    currentUserId,
    currentUser,
    runCampaigns,
    memberCampaigns
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: component => dispatch(openModal(component))
  };
};

export default connect(msp, mdp)(Profile);
