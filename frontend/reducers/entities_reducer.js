import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import campaignReducer from './campaign_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  campaigns: campaignReducer
});

export default entitiesReducer;
