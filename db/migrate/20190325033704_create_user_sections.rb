class CreateUserSections < ActiveRecord::Migration[5.2]
  def change
    create_table :user_sections do |t|
      t.integer :user_id
      t.integer :section_id
      t.boolean :active
    end
  end
end
