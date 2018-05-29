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
    <div className='modal-bg' onClick={() => this.props.closeModal()}>
      <div className='modal-child' onClick={e => e.stopPropogation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal;
