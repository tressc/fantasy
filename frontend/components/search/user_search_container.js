import React from 'react';
import { connect } from 'react-redux';
import { userSearch } from '../../actions/search_actions';
import {
  createMembership,
  removeMembershipErrors
} from '../../actions/membership_actions';
import UserSearch from './user_search';

const msp = (state) => {
  return ({
    searchResults: state.ui.searchResults,
    errors: state.errors.membership
  });
};

const mdp = (dispatch) => {
  return ({
    userSearch: (query) => dispatch(userSearch(query)),
    createMembership: (membership) => dispatch(createMembership(membership)),
    removeMembershipErrors: () => dispatch(removeMembershipErrors())
  });
};

export default connect(msp, mdp)(UserSearch);
