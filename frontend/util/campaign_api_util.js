export const newCampaign = (campaign) => {
  return $.ajax({
    url: '/api/campaigns',
    method: 'POST',
    data: campaign
  });
};

export const getCampaign = (id) => {
  return $.ajax({
    url: `/api/campaigns/${id}`,
    method: 'GET'
  });
};
