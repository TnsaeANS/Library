class Lend < ApplicationRecord
  belongs_to :user
  belongs_to :book
  validates :lent_date, :return_date, presence: true
  validates :returned, inclusion: { in: [true, false] }

  
end
