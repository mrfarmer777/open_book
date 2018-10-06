class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :age, :user_books
end
