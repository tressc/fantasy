class Campaign < ApplicationRecord
  validates :title, :gm_id, :gm_name, presence: true

  belongs_to :gm,
    class_name: :User,
    foreign_key: :gm_id,
    primary_key: :id

  has_many :memberships,
    class_name: :Membership,
    foreign_key: :campaign_id,
    primary_key: :id

  has_many :players,
    through: :memberships,
    source: :player

  def approved_memberships
    self.memberships.where(status: 'APPROVED')
  end

  def active_players
    self.approved_memberships.map do |mem|
      self.players.where(id: mem.player_id)
    end
  end

  def active_player_ids
    self.approved_memberships.map(&:player_id)
  end

  def pending_memberships
    self.memberships.where(status: 'PENDING')
  end

  def pending_players
    self.pending_memberships.map do |mem|
      self.players.where(id: mem.player_id)
    end
  end

  def pending_player_ids
    self.pending_memberships.map(&:player_id)
  end

end
