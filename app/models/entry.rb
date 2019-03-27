class Entry < ApplicationRecord
    belongs_to :user_book
    belongs_to :user
    
    
    def self.total_pages
        pages=0
        self.all.each{|ent| pages+=ent.pages}
        pages
    end
    
    def self.recent
        self.all.order(created_at: :desc)
    end
        
    
    def self.total_minutes
        minutes=0
        self.all.each{|ent| minutes+=ent.time}
        minutes
    end
    
    def self.average_reading_rate
        if self.total_minutes>0
            (self.total_pages.to_f/self.total_minutes.to_f).round(2)
        else
            0
        end
    end
    
    
end
