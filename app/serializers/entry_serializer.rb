class EntrySerializer < ActiveModel::Serializer
  attributes :id, :time, :pages, :book
  
  belongs_to :user
  belongs_to :book
end
