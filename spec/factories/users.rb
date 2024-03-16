FactoryBot.define do
  factory :user do
    username { "MyString" }
    password { "MyString" }
    password_confirmation { "MyString" }
    email { "MyString" }
    user_type { "MyString" }
  end
end
