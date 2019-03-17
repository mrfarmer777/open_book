class UserSerializer < ActiveModel::Serializer
    has_many :books, through: :user_books
  
    attributes :id, :name, :email, :age, :entries, :books

end
