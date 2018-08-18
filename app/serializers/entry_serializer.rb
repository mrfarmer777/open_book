class EntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :time, :pages, :book, :book_id
end
