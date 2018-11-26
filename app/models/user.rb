class User < ApplicationRecord
    has_many :user_books
    has_many :books, through: :user_books
    has_many :entries
    
    has_secure_password
end
