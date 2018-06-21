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
  @user.joined_campaigns.each do |campaign|
    json.set! campaign.id do
      json.partial! 'api/campaigns/campaign', campaign: campaign
    end
  end
end

json.memberships do
  @user.memberships.each do |membership|
    json.set! membership.id do
      json.partial! 'api/memberships/membership', membership: membership
    end
  end
end

# json.memberships do
#   @user.approved_memberships.each do |membership|
#     json.set! membership.id do
#       json.partial! 'api/memberships/membership', membership: membership
#     end
#   end
# end
#
# json.pending_memberships do
#   @user.pending_memberships.each do |membership|
#     json.set! membership.id do
#       json.partial! 'api/memberships/membership', membership: membership
#     end
#   end
# end
