import React from 'react';
import { connect } from 'react-redux';
import Folder from './folder';
import {
  destroyFolder,
  updateFolder
} from '../../actions/folder_actions';
import {
  createPage
} from '../../actions/page_actions';

const msp = (state, ownProps) => {
  const folder = state.entities.folder[ownProps.id];
  const pages = folder.page_ids.map(id => {
    return state.entities.pages[id];
  });
};

const mdp = (dispatch) => {
  return({
    updateFolder: (folder) => dispatch(updateFolder(folder)),
    destroyFolder: (id) => dispatch(destroyFolder(id)),
    createPage: (page) => dispatch(createPage(page))
  });
};

export default connect(msp, mdp)(Folder);
