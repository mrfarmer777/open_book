class EntrySerializer < ActiveModel::Serializer
  attributes :id, :time, :pages, :book, :book_id
end
