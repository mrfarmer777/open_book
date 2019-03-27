class UserBook < ApplicationRecord
    belongs_to :user
    belongs_to :book
    has_many :entries
    
    scope :completed, -> {where(status: "Completed")}
    scope :planned, -> {where(status: "Planned")}
    scope :active, -> {where(status: "Active")}
   
    
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
    
    def check_status
        if self.completed?
            self.update(status: "Completed")
        elsif self.entries.length > 0
            self.update(status: "Active")
        else
            self.update(status: "Planned")
        end
    end
        
    
    def completed?
        return self.pages_read>=self.pages
    end
    
    def last_entry
        if self.entries.length>0
            self.entries.recent.first.created_at
        else
            DateTime.new()
        end
    end
        
    
    def self.all_genres
        self.all.collect{|book| book.genres}.join(", ")
    end
    
    def self.most_recent
        self.all.sort_by{|book| book.created_at}.first
    end
    
    
    
end
