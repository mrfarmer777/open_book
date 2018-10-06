class Book < ApplicationRecord
    has_many :entries
    has_many :user_books
    has_many :users, through: :user_books
    
    
    def book_pages_read
        pages=0
        self.entries.each{|ent| pages+=ent.pages}
        pages
    end
    
    def completed?
        return self.pages===self.pages_read
    end
        
    
    def self.all_genres
        self.all.collect{|book| book.genres}.join(", ")
    end
    
    def self.most_recent
        self.all.sort_by{|book| book.created_at}.first
    end
end
