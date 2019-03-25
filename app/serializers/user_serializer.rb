class UserSerializer < ActiveModel::Serializer
    
    has_many :user_books
    has_many :entries, through: :user_book
  
    attributes :id, :name, :email, :age, :entries, :user_books
    
    def user_books
        self.object.user_books.map do |ub|
            {
            id: ub.id,
            title: ub.book.title,
            author: ub.book.author, 
            genres: ub.book.genres,
            pages: ub.pages,
            status: ub.status,
            pages_read: ub.pages_read,
            entries: ub.entries
            }
        end
    end

end
