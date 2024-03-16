# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin's `rails db:seed` command (or created alongside the database with `db:setup`).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Book.destroy_all
User.destroy_all

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

1.times do
  User.create!(
    username: "name",
    password: "password",
    password_confirmation: "password",
    email: "email@bitscollege.edu.et",
    user_type: "admin"
  )
end

