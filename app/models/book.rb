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
          "10": self.entries.within_percentage(0,10).count,
          "20": self.entries.within_percentage(10,20).count,
          "30": self.entries.within_percentage(20,30).count,
          "40": self.entries.within_percentage(30,40).count,
          "50": self.entries.within_percentage(40,50).count,
          "60": self.entries.within_percentage(50,60).count,
          "70": self.entries.within_percentage(60,70).count,
          "80": self.entries.within_percentage(70,80).count,
          "90": self.entries.within_percentage(80,90).count,
          "100": self.entries.within_percentage(80,90).count,
        }
        return res
      end
    
        
    
    def self.all_genres
        self.all.collect{|book| book.genres}.join(", ")
    end
    
    def self.most_recent
        self.all.sort_by{|book| book.created_at}.first
    end
end
