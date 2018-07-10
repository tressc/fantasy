import {
  RECEIVE_FOLDER,
  REMOVE_FOLDER
} from '../../actions/folder_actions';
import { merge } from 'lodash';

const folderReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLDER:
      return merge({}, state, {[action.folder.id]: action.folder});
    case REMOVE_FOLDER:
      const newState = merge({}, state);
      delete newState[action.folder.id];
      return newState;
    default:
      return state;
  }
};

export default folderReducer;
