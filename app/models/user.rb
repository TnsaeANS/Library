class User < ApplicationRecord
  has_secure_password

  validates :username, :email, presence: true, uniqueness: true
  validates :user_type, presence: true
  validates :email, format: { with: /\A[a-zA-Z0-9._%+-]+@bitscollege\.edu\.et\z/, message: "must be a valid Bits College email" }

end
