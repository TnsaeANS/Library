FactoryBot.define do
  factory :lend do
    user
    book
    lent_date { "2024-02-05" }
    return_date { "2024-02-05" }
  end
end
