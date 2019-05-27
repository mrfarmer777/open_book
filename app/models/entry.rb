class Entry < ApplicationRecord
    belongs_to :user_book
    belongs_to :user
    belongs_to :book
    
    #time period scopes for entry reporting
    scope :this_month, -> {where(created_at: Time.zone.now.beginning_of_month..Time.zone.now.end_of_month)}
    scope :this_week, -> {where(created_at: Time.zone.now.beginning_of_week..Time.zone.now.end_of_week)}
    scope :last_month, -> {where(created_at: Time.zone.now.beginning_of_month.prev_month..Time.zone.now.beginning_of_month.prev_day.end_of_day)}
    scope :last_week, -> {where(created_at: Time.zone.now.beginning_of_week.prev_week..Time.zone.now.beginning_of_week.prev_day.end_of_day)}


   
    
    
    
    #CLASS METHODS/////////////////
    def self.within_percentage(lowp, highp)
        where("entry_percentage >= ? AND entry_percentage < ? ", lowp, highp)
    end
    
    
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
