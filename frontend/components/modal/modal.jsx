import React from 'react';
import CampaignFormContainer from '../campaign/campaign_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case 'campaign':
      component = <CampaignFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-bg'>
      <div className='modal-child'>
        { component }
      </div>
    </div>
  );
}

export default Modal;
