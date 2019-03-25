class AddPagesAndPagesReadToUserBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :user_books, :pages, :integer
    add_column :user_books, :pages_read, :integer, default: 0
    add_column :user_books, :status, :string, default: "Planned"
    add_column :user_books, :reads, :integer, default: 0
    add_column :user_books, :rating, :float, default: 0
  end
end
