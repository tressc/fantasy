class Membership < ApplicationRecord
  validates :campaign_id, :player_id, presence: true

  belongs_to :player,
    class_name: :User,
    foreign_key: :player_id,
    primary_key: :id

  belongs_to :campaign,
    class_name: :Campaign,
    foreign_key: :campaign_id,
    primary_key: :id
end
