class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :course_name
      t.integer :year
      t.integer :teacher_id

      t.timestamps
    end
  end
end
