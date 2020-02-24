class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
    	t.string :name	
    	t.string :age
    	t.string :bike
    	t.string :car
    	t.text :address
    	

      t.timestamps
    end
  end
end
