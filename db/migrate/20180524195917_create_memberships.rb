class CreateMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :memberships do |t|
      t.integer :campaign_id
      t.integer :player_id

      t.timestamps
    end
  end
end
