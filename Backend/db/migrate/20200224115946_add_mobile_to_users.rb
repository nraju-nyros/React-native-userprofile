class AddMobileToUsers < ActiveRecord::Migration[5.2]
  def change
  	add_column :users, :mobile, :bigint
  end
end
