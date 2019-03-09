class CreateStudentBooksAndTeacherBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :student_books do |t|
      t.integer :student_id
      t.integer :book_id

      t.timestamps
    end
    
    create_table :teacher_books do |t|
      t.integer :teacher_id
      t.integer :book_id
      
      t.timestamps
    end
    
  end
end
