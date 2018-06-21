class User < ApplicationRecord
  validates_uniqueness_of :username, case_sensitive: false
  validates :username, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :run_campaigns,
    class_name: :Campaign,
    foreign_key: :gm_id,
    primary_key: :id

  has_many :memberships,
    class_name: :Membership,
    foreign_key: :player_id,
    primary_key: :id

  has_many :campaigns,
    through: :memberships,
    source: :campaign

  attr_reader :password

  after_initialize :ensure_session_token

  def approved_memberships
    self.memberships.where(status: 'APPROVED').map do |mem|
      mem
    end
  end

  def pending_memberships
    self.memberships.where(status: 'PENDING').map do |mem|
      mem
    end
  end

  def joined_campaigns
    self.approved_memberships.map do |mem|
      self.campaigns.where(id: mem.campaign_id)
    end
  end

  def campaign_ids
    self.joined_campaigns.map do |camp|
      camp.id
    end
  end

  def pending_ids
    self.pending_memberships.map do |mem|
      mem.id
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.search(query)
    sql = "%" + query.downcase + "%"
    User
      .where('lower(username) LIKE ?', sql)
      .limit(8)
  end

  def reset_session_token!
    self.session_token = User.generate_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_token
  end
end
