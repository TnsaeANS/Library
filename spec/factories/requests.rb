FactoryBot.define do
  factory :request do
    title { "MyString" }
    author { "MyString" }
    isbn { "MyString" }
    edition { "MyString" }
    publisher { "MyString" }
    user
  end
end
