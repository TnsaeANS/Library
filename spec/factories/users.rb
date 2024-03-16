FactoryBot.define do
  factory :user do
    username { "MyString" }
    password { "MyString" }
    password_confirmation { "MyString" }
    email { "user@bitscollege.edu.et" }
    user_type { "MyString" }
  end
end