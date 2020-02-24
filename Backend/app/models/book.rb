class Book < ApplicationRecord
  mount_uploader :image, ImageUploader # Tells rails to use this uploader for this model.
  validates_presence_of :name,message:"can't be empty"
  validates_presence_of :author,message:"must be given"
  validates_presence_of :category,message:"must be choose"
  validates_presence_of :description,message:"must be given"
  validates_presence_of :image,message:"must be select"



end
