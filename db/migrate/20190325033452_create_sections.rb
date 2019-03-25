class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :name
      t.integer :period
      t.integer :teacher_id
      t.date :start_date
      t.date :end_date
      t.boolean :public
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
