import {
  RECEIVE_FOLDER,
  RECEIVE_FOLDER_ERRORS,
  REMOVE_FOLDER_ERRORS
} from '../actions/folder_actions';

const folderErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLDER_ERRORS:
      return action.errors;
    case RECEIVE_FOLDER:
      return [];
    case REMOVE_FOLDER_ERRORS:
      return [];
    default:
      return state;
  }
};

export default folderErrorsReducer;
