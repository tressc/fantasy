json.user do
  json.partial! 'api/users/user', user: current_user
end

json.run_campaigns do
  current_user.run_campaigns.each do |campaign|
    json.set! campaign.id do
      json.partial! 'api/campaigns/campaign', campaign: campaign
    end
  end
end

json.member_campaigns do
  current_user.campaigns.each do |campaign|
    json.set! campaign.id do
      json.partial! 'api/campaigns/campaign', campaign: campaign
    end
  end
end
