class UserBookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genres, :pages, :pages_read, :entries, :status
  
  belongs_to :user
  belongs_to :book
  has_many :entries
  
  
  def title
      self.object.book.title
  end
  
  def genres
      self.object.book.genres
  end
  
  def author
      self.object.book.author
  end
end