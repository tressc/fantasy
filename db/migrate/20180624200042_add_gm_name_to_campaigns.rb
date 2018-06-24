class AddGmNameToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :gm_name, :string, null: false
  end
end
