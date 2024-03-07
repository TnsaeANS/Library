require 'rails_helper'

RSpec.describe Request, type: :model do
  subject { create(:request) }
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_presence_of(:author) }
  it { is_expected.to belong_to(:user) }
end
