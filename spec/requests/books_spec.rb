require 'rails_helper'

RSpec.describe "Books", type: :request do
  let(:valid_attributes) do
    {
      isbn: "123456789",
      title: "MyString",
      author: "MyStrings",
      genre: "MyStrings genre",
      pub_date: "2024-02-05",
      status: "My"
    }
  end

  let(:invalid_attributes) do
    {
      isbn: nil,
      title: nil,
      author: "MyStrings",
      genre: "MyStrings genre",
      pub_date: "2024-02-05",
      status: "My"
    }
  end

  describe 'GET /index' do
    it 'renders a successful response' do
      3.times { create(:book) }
      get books_url
      expect(response).to be_successful
    end
  end

  describe 'GET /show' do
    it 'renders a successful response' do
      book = create(:book)
      get book_url(book)
      expect(response).to be_successful
      expect(response.body).to include(book.title)
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new book' do
        expect do
          post books_url, params: { book: valid_attributes }
        end.to change(Book, :count).by(1)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new book' do
        expect do
          post books_url, params: { book: invalid_attributes }
        end.to change(Book, :count).by(0)
      end

      it 'responds with unprocessable entity' do
        post books_url, params: { book: invalid_attributes }
        expect(response).not_to be_successful
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      let(:new_attributes) do
        {
          title: "new title"
        }
      end

      it 'updates the requested book' do
        book = create(:book)
        expect(book.title).not_to eq new_attributes[:title]
        patch book_url(book), params: {book: new_attributes}
        book.reload
        expect(book.title).to eq new_attributes[:title]
      end
    end

    context 'with invalid parameters' do
      it 'responds with unprocessable entity' do
        book = create(:book)
        patch book_url(book), params: { book: invalid_attributes }
        expect(response).not_to be_successful
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end