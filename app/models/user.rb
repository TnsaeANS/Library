class User < ApplicationRecord
  validates :username, :password, :email, presence: true, uniqueness: true
  validates :user_type, presence: true
end
