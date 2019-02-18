class ChangeTypeColumnInUsersBack < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :type, :string
  end
end
