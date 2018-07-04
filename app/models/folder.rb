class Folder < ApplicationRecord
  validates :campaign_id, :title, :status, presence: true

  belongs_to :campaign,
    class_name: :Campaign,
    foreign_key: :campaign_id,
    primary_key: :id

  has_many :pages,
    class_name: :Page,
    foreign_key: :folder_id,
    primary_key: :id
end
