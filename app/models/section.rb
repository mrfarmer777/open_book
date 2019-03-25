class Section < ApplicationRecord
    belongs_to :teacher, :class_name => :user, :foreign_key => "teacher_id"
    has_many :user_sections
    has_many :users, through: :user_sections
end
