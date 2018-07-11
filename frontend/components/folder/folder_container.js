import React from 'react';
import { connect } from 'react-redux';
import Folder from './folder';
import {
  createFolder,
  destroyFolder,
  updateFolder
} from '../../actions/folder_actions';

const msp = (state) => {

};

const mdp = (dispatch) => {
  return({
    createFolder: (folder) => dispatch(createFolder(folder)),
    updateFolder: (folder) => dispatch(updateFolder(folder)),
    destroyFolder: (id) => dispatch(destroyFolder(id))
  });
};

export default connect(msp, mdp)(Folder);
