# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Book.destroy_all
# Lend.destroy_all

dummy = FactoryBot.create(:user)

20.times do
  Book.create(
  title: Faker::Lorem.word,
  isbn: Faker::Number.number(digits:  13).to_s,
  author: Faker::Lorem.word,
  genre: Faker::Lorem.word,
  pub_date: Faker::Date.between(from:  5.years.ago, to: Date.today),
  status: ['borrowed', 'available'].sample
)

end


books = Book.all[0..9]

books.each do |book|
  Lend.create!(
    book_id: book.id,
    user_id: dummy.id,
    lent_date: Faker::Date.between(from:  5.years.ago, to: Date.today),
    return_date: Faker::Date.between(from:  5.years.ago, to: Date.today)
  )
end
