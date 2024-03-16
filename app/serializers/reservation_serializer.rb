class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :reservation_date, :book, :user
end
