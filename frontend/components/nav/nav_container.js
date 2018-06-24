import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
import {
  approveMembership,
  destroyMembership
} from '../../actions/membership_actions';

const msp = (state) => {
  const currentUser = state.session.currentUser;
  const pendingIds = state.entities.users[currentUser].pending_ids;
  const pendings = pendingIds.map(id => {
    return state.entities.memberships[id];
  });
  return {
    currentUser,
    pendings
  };
};

const mdp = (dispatch) => {
  return {
    logout: user => dispatch(logout(user)),
    approveMembership: id => dispatch(approveMembership(id)),
    destroyMembership: id => dispatch(destroyMembership(id))
  };
};

export default connect(msp, mdp)(Nav);
