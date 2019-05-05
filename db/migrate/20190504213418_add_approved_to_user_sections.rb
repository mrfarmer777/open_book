class AddApprovedToUserSections < ActiveRecord::Migration[5.2]
  def change
    add_column :user_sections, :approved, :boolean
  end
end
