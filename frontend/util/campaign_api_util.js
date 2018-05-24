export const newCampaign = (campaign) => {
  return $.ajax({
    url: '/api/campaigns',
    method: 'POST',
    data: campaign
  });
};
