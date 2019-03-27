class UserBook < ApplicationRecord
    belongs_to :user
    belongs_to :book
    has_many :entries
    
    scope :completed, -> {where(completed?)}
   
    
    def pages_read
        pages=0
        self.entries.each{|ent| pages+=ent.pages}
        if pages>=self.pages
            pages=self.pages
        end
        pages
    end
    
    
    def percent_complete
        (self.pages_read/self.pages*100).round(2)
    end
    
    def completed?
        return self.pages>=self.pages_read
    end
    
    def last_entry
        self.entries.length>0 ? self.entries.recent.first.created_at : 0
    end
        
    
    def self.all_genres
        self.all.collect{|book| book.genres}.join(", ")
    end
    
    def self.most_recent
        self.all.sort_by{|book| book.created_at}.first
    end
    
    
    
end
