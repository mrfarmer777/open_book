class User < ApplicationRecord
    has_many :entries
    has_many :user_books
    has_many :books, through: :user_books
    
    has_secure_password
    
    
    def recent_books
        self.user_books.sort_by{|ub| ub.last_entry}.reverse
    end
end
