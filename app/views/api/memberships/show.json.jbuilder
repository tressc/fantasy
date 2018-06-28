json.membership do
  json.partial! 'api/memberships/membership', membership: @membership
end

json.user do
  json.partial! 'api/users/user', user: @membership.player
end
