class Users < ActiveRecord::Migration[5.2]
  def change
  	 create_table :users do |t|
      t.string :fistname
      t.string :lastname
      t.string :email
      t.string :password
      t.string :image

      t.timestamps
    end
  end
end
