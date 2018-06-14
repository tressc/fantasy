import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import campaignReducer from './campaign_reducer';
// import membershipReducer from './membership_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  campaigns: campaignReducer,
  // memberships: membershipReducer
});

export default entitiesReducer;
