import {
  RECEIVE_PAGE,
  RECEIVE_PAGE_ERRORS,
  REMOVE_PAGE_ERRORS
} from '../actions/page_actions';

const pageErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PAGE_ERRORS:
      return action.errors;
    case RECEIVE_PAGE:
      return [];
    case REMOVE_PAGE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default pageErrorsReducer;
