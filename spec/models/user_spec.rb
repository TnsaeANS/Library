require 'rails_helper'

RSpec.describe User, type: :model do
  subject { create(:user) }
  it { is_expected.to validate_presence_of(:username) }
  it { is_expected.to validate_presence_of(:password) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:user_type) }
end
