class EntrySerializer < ActiveModel::Serializer
  attributes :id, :minutes_read, :entry_page, :user_book
  
  belongs_to :user_book
end
