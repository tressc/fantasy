import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createFolder } from '../../actions/folder_actions';
import FolderForm from './folder_form';

const msp = (state) => {
  return {
    errors: state.errors.folder
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createFolder: (folder) => dispatch(createFolder(folder))
  };
};

export default connect(msp, mdp)(FolderForm);
