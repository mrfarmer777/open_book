class RemoveTitleFromEntries < ActiveRecord::Migration[5.2]
  def change
    remove_column :entries, :title
  end
end
