class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.integer :gm_id
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
