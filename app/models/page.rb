class Page < ApplicationRecord
  validates :folder_id, :title, :status, presence: true

  belongs_to :folder,
    dependent: :destroy,
    class_name: :Folder,
    foreign_key: :folder_id,
    primary_key: :id
end
