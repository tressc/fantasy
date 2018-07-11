import React from 'react';
import CampaignFormContainer from '../campaign_form/campaign_form_container';
import FolderFormContainer from '../folder_form/folder_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case 'campaign':
      component = <CampaignFormContainer />;
      break;
    case 'folder':
      component = <FolderFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-bg' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal;
