import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import campaignErrorsReducer from './campaign_errors_reducer';
import membershipErrorsReducer from './membership_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  campaign: campaignErrorsReducer,
  membership: membershipErrorsReducer
});

export default errorsReducer;
