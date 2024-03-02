class Book < ApplicationRecord
  validates  :author, :genre, :pub_date, :status, presence: true
  validates :isbn, :title, presence: true, uniqueness: true
  validate :publication_date_cannot_be_in_the_future


  private

  def publication_date_cannot_be_in_the_future
    if pub_date.present? && pub_date > Date.current
      errors.add(:pub_date, "can't be in the future")
    end
  end

end
