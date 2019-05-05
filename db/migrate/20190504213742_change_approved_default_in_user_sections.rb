class ChangeApprovedDefaultInUserSections < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:user_sections, :approved, false)
  end
end
