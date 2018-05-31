import React from 'react';
import { connect } from 'react-redux';
import CampaignForm from './campaign_form';
import { closeModal } from '../../actions/modal_actions';
import { createCampaign } from '../../actions/campaign_actions';
const msp = (state) => {
  return {
    errors: state.errors.campaign
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createCampaign: campaign => dispatch(createCampaign(campaign))
  };
};

export default connect(msp, mdp)(CampaignForm);
