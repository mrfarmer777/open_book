class AddUserIdToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :enterable_id, :integer
    add_column :entries, :enterable_type, :string
    add_index :entries, [:enterable_type, :enterable_id]
  end
end
