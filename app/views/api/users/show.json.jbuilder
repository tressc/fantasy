json.user do
  json.partial! 'api/users/user', user: @user
end

json.run_campaigns do
  @user.run_campaigns.each do |campaign|
    json.set! campaign.id do
      json.partial! 'api/campaigns/campaign', campaign: campaign
    end
  end
end

json.member_campaigns do
  @user.campaigns.each do |campaign|
    json.set! campaign.id do
      json.partial! 'api/campaigns/campaign', campaign: campaign
    end
  end
end
