import * as APIUtil from '../util/page_api_util';

export const RECEIVE_PAGE = 'RECEIVE_PAGE';
export const REMOVE_PAGE = 'REMOVE_PAGE';
export const RECEIVE_PAGE_ERRORS = 'RECEIVE_PAGE_ERRORS';
export const REMOVE_PAGE_ERRORS = 'REMOVE_PAGE_ERRORS';

const receivePage = ({page}) => {
  return {
    type: RECEIVE_PAGE,
    page
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_PAGE_ERRORS,
    errors
  };
};

const removePage = ({page}) => {
  return {
    type: REMOVE_PAGE,
    page
  };
};

export const createPage = (page) => (dispatch) => {
  return APIUtil.newPage(page).then(payload => {
    dispatch(receivePage(payload));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const destroyPage = (id) => (dispatch) => {
  return APIUtil.destroyPage(id).then(page => {
    dispatch(removePage(page));
  });
};

export const updatePage = (page) => (dispatch) => {
  return APIUtil.updatePage(page).then(uPage => {
    dispatch(receivePage(uPage));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
