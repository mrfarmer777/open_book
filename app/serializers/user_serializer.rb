class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :age, :entries, :books
end
