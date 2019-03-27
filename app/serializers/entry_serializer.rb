class EntrySerializer < ActiveModel::Serializer
  attributes :id, :time, :pages, :user_book
  
  belongs_to :user_book
end
