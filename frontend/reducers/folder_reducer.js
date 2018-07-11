import {
  RECEIVE_FOLDER,
  REMOVE_FOLDER
} from '../../actions/folder_actions';
import {
  RECEIVE_CAMPAIGN
} from '../../actions/campaign_actions';
import {
  REMOVE_PAGE
} from '../../actions/page_actions';
import { merge } from 'lodash';

const folderReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_FOLDER:
      return merge({}, state, {[action.folder.id]: action.folder});
    case REMOVE_FOLDER:
      delete newState[action.folder.id];
      return newState;
    case RECEIVE_CAMPAIGN:
      return merge({}, state, action.folders);
    case REMOVE_PAGE:
      const pages = newState[action.page.folder_id].page_ids;
      for (let i = 0; i < pages.length; i++) {
        if (pages[i] === action.page.id) {
          newState[action.page.folder_id].page_ids.splice(i, 1);
        }
      }
      return newState;
    default:
      return state;
  }
};

export default folderReducer;
