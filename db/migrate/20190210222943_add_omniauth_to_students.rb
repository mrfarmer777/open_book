class AddOmniauthToStudents < ActiveRecord::Migration[5.2]
  def change
    add_column :students, :provider, :string
    add_column :students, :uid, :string
    add_column :students, :token, :string
    add_column :students, :expires_at, :integer
    add_column :students, :expires, :boolean
    add_column :students, :refresh_token, :string
    
    add_column :teachers, :provider, :string
    add_column :teachers, :uid, :string
    add_column :teachers, :token, :string
    add_column :teachers, :expires_at, :integer
    add_column :teachers, :expires, :boolean
    add_column :teachers, :refresh_token, :string
  end
end
