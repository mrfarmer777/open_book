class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.string :title
      t.integer :time
      t.integer :pages

      t.timestamps
    end
  end
end
