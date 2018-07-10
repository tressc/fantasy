import {
  RECEIVE_PAGE,
  REMOVE_PAGE
} from '../../actions/page_actions';
import {
  RECEIVE_CAMPAIGN
} from '../../actions/campaign_actions';
import { merge } from 'lodash';

const pageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PAGE:
      return merge({}, state, {[action.page.id]: action.page});
    case REMOVE_PAGE:
      const newState = merge({}, state);
      delete newState[action.page.id];
      return newState;
    case RECEIVE_CAMPAIGN:
      return merge({}, state, action.pages);
    default:
      return state;
  }
};

export default pageReducer;
