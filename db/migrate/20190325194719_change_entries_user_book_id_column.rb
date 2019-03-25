class ChangeEntriesUserBookIdColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :entries, :user_books_id, :user_book_id
  end
end
