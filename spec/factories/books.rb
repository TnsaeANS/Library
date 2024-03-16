FactoryBot.define do
  factory :book do
    isbn { Faker::Number.number(digits: 10) }
    title { Faker::Lorem.word}
    author { "MyStrings" }
    genre { "MyStrings genre" }
    pub_date { "2024-02-05" }
    status { "My" }
  end
end