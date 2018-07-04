class CreateFolders < ActiveRecord::Migration[5.1]
  def change
    create_table :folders do |t|
      t.string :title, null: false
      t.integer :campaign_id, null: false
      t.string :status, null: false
      t.timestamps
    end
  end
end
