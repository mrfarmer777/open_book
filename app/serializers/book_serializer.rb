class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :pages, :genres, :entries
end
