require 'rails_helper'

RSpec.describe Book, type: :model do
  subject { create(:book) }
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_uniqueness_of(:title) }

  it { is_expected.to validate_presence_of(:isbn) }
  it { is_expected.to validate_uniqueness_of(:isbn) }

  it { is_expected.to validate_presence_of(:author) }
  it { is_expected.to validate_presence_of(:genre) }
  it { is_expected.to validate_presence_of(:pub_date) }
  it { is_expected.to validate_presence_of(:status) }
end
