class Campaign < ApplicationRecord
  validates :title, :gm_id, presence: true

  belongs_to :gm,
    class_name: :User,
    foreign_key: :gm_id,
    primary_key: :id

  
end
