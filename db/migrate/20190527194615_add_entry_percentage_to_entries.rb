class AddEntryPercentageToEntries < ActiveRecord::Migration[5.2]
  def change
    add_column :entries, :entry_percentage, :float
  end
end
