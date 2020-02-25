class User < ApplicationRecord
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, :presence => true,
                     :length => { minimum: 6 },allow_blank: true
                      has_secure_password :validations => false
  # mount_uploader :image, ImageUploader # Tells rails to use this uploader for this model.

  has_one_attached :image

  def image_url
    Rails.application.routes.url_helpers.rails_blob_path(self.image, only_path: true)
  end

  def dummy_image
    self.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'Profile.png')), filename: 'Profile.png', content_type: 'image/png')
  end

end
