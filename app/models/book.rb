class Book < ApplicationRecord
    has_many :entries
    has_many :user_books
    has_many :users, through: :user_books
    
    
    
    
    def pages_read
        pages=0
        self.entries.each{|ent| pages+=ent.pages}
        pages
    end
    
    def completed?
        return self.pages===self.pages_read
    end
    
    def entry_distribution
        res = {
          10 => 0,
          20 => 0,
          30 => 0,
          40 => 0,
          50 => 0,
          60 => 0,
          70 => 0,
          80 => 0,
          90 => 0,
          100 => 0
        }
        self.entries.each do |e|
            percentage_boundary=((e.entry_percentage/10).ceil * 10)
            res[percentage_boundary]=res[percentage_boundary]+1
        end
        return res
    end
    
        
    
    def self.all_genres
        self.all.collect{|book| book.genres}.join(", ")
    end
    
    def self.most_recent
        self.all.sort_by{|book| book.created_at}.first
    end
end
