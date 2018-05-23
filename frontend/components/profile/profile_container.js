import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  const currentUser = state.session.currentUser;
  return {
    user,
    currentUser
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(Profile);
