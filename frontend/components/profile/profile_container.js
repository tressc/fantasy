import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  const currentUser = state.session.currentUser;
  return {
    userId,
    currentUser
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    openModal: component => dispatch(openModal(component))
  };
};

export default connect(msp, mdp)(Profile);
