class UserSerializer < ActiveModel::Serializer
    
    has_many :user_books
    has_many :entries, through: :user_book
  
    attributes :id, :name, :email, :age, :entries, :user_books, :total_pages, :total_time, :time_this_week, :pages_this_week, :reading_rate, :section_invites
    
    def user_books
        self.object.recent_books.map do |ub|
            {
            id: ub.id,
            title: ub.book.title,
            author: ub.book.author, 
            genres: ub.book.genres,
            pages: ub.pages,
            status: ub.status,
            pages_read: ub.pages_read,
            percent_complete: ub.percent_complete,
            entries: ub.entries
            }
        end
    end
    
    #serializes un-approved sections as section invitations
    def section_invites
        self.object.user_sections.where(approved: false).map do |us|
            {
                id: us.id,
                name: us.section.name,
                teacher: us.section.teacher.name
            }
        end
    end

end
