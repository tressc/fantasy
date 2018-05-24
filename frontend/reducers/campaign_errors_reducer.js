import {
  RECEIVE_CAMPAIGN,
  RECEIVE_CAMPAIGN_ERRORS,
  REMOVE_CAMPAIGN_ERRORS
} from '../actions/campaign_actions';

const campaignErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN_ERRORS:
      return action.errors;
    case RECEIVE_CAMPAIGN:
      return [];
    case REMOVE_CAMPAIGN_ERRORS:
      return [];
    default:
      return state;
  }
};
