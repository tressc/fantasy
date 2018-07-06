json.campaign do
  json.partial! 'api/campaigns/campaign', campaign: @campaign
end

json.players do
  @campaign.players.each do |player|
    json.set! player.id do
      json.partial! 'api/users/user', user: player
    end
  end
end

json.gm do
  json.set! @campaign.gm.id do
    json.partial! 'api/users/user', user: @campaign.gm
  end
end

# TODO: remove if not needed

json.memberships do
  @campaign.memberships.each do |membership|
    json.set! membership.id do
      json.partial! 'api/memberships/membership', membership: membership
    end
  end
end

json.folders do
  @campaign.folders.each do |folder|
    json.set! folder.id do
      json.partial! 'api/folders/folder', folder: folder
    end
  end
end

json.pages do
  @campaign.folders.each do |folder|
    folder.pages.each do |page|
      json.set! page.id do
        json.partial! 'api/pages/page', page: page
      end
    end
  end
end
