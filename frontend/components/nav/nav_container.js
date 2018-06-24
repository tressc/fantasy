import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
import {
  approveMembership,
  destroyMembership
} from '../../actions/membership_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = (state) => {
  let pendings;
  let pendingIds;
  let hasUser;
  const currentUser = state.session.currentUser;
  const stateMemberships = Object.keys(state.entities.memberships);
  const user = state.entities.users[currentUser];
  const userMemberships = user.pending_ids.concat(user.campaign_ids);
  hasUser = stateMemberships.length >= userMemberships.length;
  pendingIds = state.entities.users[currentUser].pending_ids;
  if (hasUser) {
    pendings = pendingIds.map(id => {
      const membership = state.entities.memberships[id];
      const campaign = state.entities.campaigns[membership.campaign_id];
      return {
        membershipId: membership.id,
        campaignId: campaign.id,
        name: campaign.title,
        gm: campaign.gm_name
      };
    });
  }
  return {
    currentUser,
    pendings,
    hasUser
  };
};

const mdp = (dispatch) => {
  return {
    logout: user => dispatch(logout(user)),
    approveMembership: id => dispatch(approveMembership(id)),
    destroyMembership: id => dispatch(destroyMembership(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(Nav);
