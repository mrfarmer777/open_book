class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :pages, :genres, :pages_read, :entries
  
  has_many :user_books
  has_many :users, through: :user_books
  has_many :entries
end
