FactoryBot.define do
  factory :reservation do
    reservation_date { "2024-02-23" }
    user 
    book
  end
end
