class AddContentToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column:entries, :content, :string
    add_column:entries, :reaction, :string
    rename_column :entries, :pages, :entry_page
    rename_column :entries, :time, :minutes_read
  end
end
