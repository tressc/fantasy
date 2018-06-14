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

const receiveCampaign = ({ campaign, players, gm, memberships }) => {
  return {
    type: RECEIVE_CAMPAIGN,
    campaign,
    players,
    gm,
    memberships
  };
};

export const fetchCampaign = (id) => (dispatch) => {
  return APIUtil.getCampaign(id).then(payload => {
    dispatch(receiveCampaign(payload));
  });
};

export const createCampaign = (campaign) => (dispatch) => {
  return APIUtil.newCampaign(campaign).then(payload => {
    dispatch(receiveCampaign(payload));
  }, errors => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};
