class AddUserBooksIdToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :user_books_id, :integer
  end
end
