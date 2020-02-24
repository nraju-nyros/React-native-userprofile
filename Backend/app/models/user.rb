class User < ApplicationRecord
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, :presence => true,
                     :length => { minimum: 6 },allow_blank: true
                      has_secure_password :validations => false

end
