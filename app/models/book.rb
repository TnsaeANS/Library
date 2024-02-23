class Book < ApplicationRecord
  validates  :author, :genre, :pub_date, :status, presence: true
  validates :isbn, :title, presence: true, uniqueness: true
end
