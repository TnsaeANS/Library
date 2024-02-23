FactoryBot.define do
  factory :book do
    isbn { "123456789" }
    title { "MyString" }
    author { "MyStrings" }
    genre { "MyStrings genre" }
    pub_date { "2024-02-05" }
    status { "My" }
  end
end
