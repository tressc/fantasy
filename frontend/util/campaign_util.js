export const createCampaign = (campaign) => {
  return $.ajax({
    url: '/api/campaigns',
    method: 'POST',
    data: campaign
  });
};
