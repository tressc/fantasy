import { searchUsers } from '../util/user_api_util';

export const USER_SEARCH_RESULTS = 'USER_SEARCH_RESULTS';

const userSearchResults = (results) => {
  return ({
    type: USER_SEARCH_RESULTS,
    results
  });
};

export const userSearch = (query) => (dispatch) => {
  return searchUsers(query).then(results =>
    dispatch(userSearchResults(results)));
};
