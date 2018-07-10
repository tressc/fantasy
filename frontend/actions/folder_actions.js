import * as APIUtil from '../util/folder_api_util';

export const RECEIVE_FOLDER = 'RECEIVE_FOLDER';
export const REMOVE_FOLDER = 'REMOVE_FOLDER';
export const RECEIVE_FOLDER_ERRORS = 'RECEIVE_FOLDER_ERRORS';
export const REMOVE_FOLDER_ERRORS = 'REMOVE_FOLDER_ERRORS';

const receiveFolder = ({folder, pages}) => {
  return {
    type: RECEIVE_FOLDER,
    folder,
    pages
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_FOLDER_ERRORS,
    errors
  };
};

const removeFolder = ({folder}) => {
  return {
    type: REMOVE_FOLDER,
    folder
  };
};

export const createFolder = (folder) => (dispatch) => {
  return APIUtil.newFolder(folder).then(payload => {
    dispatch(receiveFolder(payload));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const destroyFolder = (id) => (dispatch) => {
  return APIUtil.destroyFolder(id).then(folder => {
    dispatch(removeFolder(folder));
  });
};

export const updateFolder = (folder) => (dispatch) => {
  return APIUtil.updateFolder(folder).then(uFolder => {
    dispatch(receiveFolder(uFolder));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
