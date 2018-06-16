import React from 'react';
import { connect } from 'react-redux';
import { userSearch } from '../../actions/search_actions';
import UserSearch from './user_search';

const msp = (state) => {
  return ({
    searchResults: state.ui.searchResults
  });
};

const mdp = (dispatch) => {
  return ({
    userSearch: (query) => dispatch(userSearch(query))
  });
};

export default connect(msp, mdp)(UserSearch);
