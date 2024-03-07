class RequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :isbn, :edition, :publisher, :user
end
