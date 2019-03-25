class EntrySerializer < ActiveModel::Serializer
  attributes :id, :time, :pages
  
  belongs_to :user
  belongs_to :user_book
end
