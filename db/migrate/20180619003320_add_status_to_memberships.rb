class AddStatusToMemberships < ActiveRecord::Migration[5.1]
  def change
    add_column :memberships, :status, :string, default: 'PENDING'
  end
end
