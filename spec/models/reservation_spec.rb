require 'rails_helper'

RSpec.describe Reservation, type: :model do

    subject { create(:reservation) }
    it { is_expected.to validate_presence_of(:reservation_date) }
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:book) }

end
