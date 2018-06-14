class AddUniquenessToMemberships < ActiveRecord::Migration[5.1]
  def change
    add_index :memberships, [ :campaign_id, :player_id ]
    add_index :memberships, :player_id
  end
end
