import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import campaignReducer from './campaign_reducer';
import membershipReducer from './membership_reducer';
import folderReducer from './folder_reducer';
import pageReducer from './page_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  campaigns: campaignReducer,
  memberships: membershipReducer,
  folders: folderReducer,
  pages: pageReducer
});

export default entitiesReducer;
