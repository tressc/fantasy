import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/campaign_actions';

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
  const userCampaigns = [];
  state.entities.users[currentUserId].run_campaign_ids.forEach(id => {
    userCampaigns.push(id);
  });
  state.entities.users[currentUserId].campaign_ids.forEach(id => {
    if (!userCampaigns.includes(id)) {
      userCampaigns.push(id);
    }
  });

  const hasCampaigns =
    Object.keys(state.entities.campaigns).length >= userCampaigns.length;
  return {
    userId,
    currentUserId,
    currentUser,
    runCampaigns,
    memberCampaigns,
    hasCampaigns
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: (component) => dispatch(openModal(component)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(Profile);
