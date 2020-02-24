class Todolists < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_lists do |t|
    	t.string :name
    end
  end
end
