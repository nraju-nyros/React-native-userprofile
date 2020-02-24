class AddColumnPublished < ActiveRecord::Migration[5.2]
  def change
  	add_column :books, :published, :string
  end
end
