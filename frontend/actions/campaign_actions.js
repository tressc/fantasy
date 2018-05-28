import * as APIUtil from '../util/campaign_api_util';

export const RECEIVE_CAMPAIGN_ERRORS = 'RECEIVE_CAMPAIGN_ERRORS';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const REMOVE_CAMPAIGN_ERRORS = 'REMOVE_CAMPAIGN_ERRORS';

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_CAMPAIGN_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_CAMPAIGN_ERRORS
  };
};

const receiveCampaign = (campaign) => {
  return {
    type: RECEIVE_CAMPAIGN,
    campaign
  };
};

export const createCampaign = (campaign) => (dispatch) => {
  return APIUtil.newCampaign(campaign).then(camp => {
    dispatch(receiveCampaign(camp));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};