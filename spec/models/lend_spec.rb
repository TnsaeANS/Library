require 'rails_helper'

RSpec.describe Lend, type: :model do
  subject { create(:lend) }
  it { is_expected.to validate_presence_of(:lent_date) }
  it { is_expected.to validate_presence_of(:return_date) }
  it { is_expected.to belong_to(:user) }
  it { is_expected.to belong_to(:book) }
end
