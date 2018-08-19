class AddBookIdToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :book_id, :integer
  end
end
