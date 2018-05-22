class RemoveAccessKeyFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :access_key, :string
  end
end
