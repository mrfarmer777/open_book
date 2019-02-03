class User < ApplicationRecord
    has_many :entries
    has_many :books, through: :entries
    
    has_secure_password
end
