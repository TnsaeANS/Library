class LendSerializer < ActiveModel::Serializer
  attributes :id, :book, :lent_date
end
