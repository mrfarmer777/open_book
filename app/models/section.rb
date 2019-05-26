class Section < ApplicationRecord
    belongs_to :teacher
    has_many :user_sections
    has_many :users, through: :user_sections
    
    #returns an array of all entries from users enrolled in this section, regardless of when the entries were made
    def get_section_entries
        ent=[]
        self.users.each do |u|
            u.entries.each do |e|
                ent.push(e)
            end
        end
        return ent
    end
    
    #returns array of all entries by section users about the chosen book
    def get_section_book_entries(book)
        ents=[]
        self.users.each do |u|
            u.entries.each do |e|
                if e.book_id==book.id
                    ents.push(e)
                end
            end
        end
        return ents
    end
            
    
end
