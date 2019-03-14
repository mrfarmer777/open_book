class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :pages, :genres, :pages_read, :entries
end
