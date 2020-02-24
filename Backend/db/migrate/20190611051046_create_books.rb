class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.string :category
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
