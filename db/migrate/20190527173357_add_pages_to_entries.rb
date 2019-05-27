class AddPagesToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :pages, :integer
  end
end
