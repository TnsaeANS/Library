class BooksController < ApplicationController

def index
#  @book = Book.all
  render json: Book.all
end

def create
  book = Book.new(book_params)
  if book.save
    render json: book, status: :created
  else
    render json: book.errors, status: :unprocessable_entity
  end
end
private

def book_params
  params.require(:book).permit(:title, :ISBN, :author, :genre, :publication_date, :status)
end

end
