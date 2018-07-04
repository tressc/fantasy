class CreatePages < ActiveRecord::Migration[5.1]
  def change
    create_table :pages do |t|
      t.string :title, null: false
      t.string :body
      t.integer :folder_id, null: false
      t.string :status, null: false
      t.timestamps
    end
  end
end
