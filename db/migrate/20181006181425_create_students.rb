class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :password_digest
      t.integer :age
      t.integer :grad_year

      t.timestamps
    end
  end
end
