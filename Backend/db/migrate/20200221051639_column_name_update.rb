class ColumnNameUpdate < ActiveRecord::Migration[5.2]
  def change
  	rename_column :users, :fistname, :firstname
  end
end
