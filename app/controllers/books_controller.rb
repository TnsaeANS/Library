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
    render json: { message: book.errors.full_messages.join(', ') }, status: :unprocessable_entity
  end
end

def destroy
  @book = Book.find_by(id: params[:id])
  if @book
     @book.destroy
  else
     render json: { error: "Book not found" }, status: :not_found
  end
end


def show
  @book = Book.find_by(id: params[:id]) # Assuming you're trying to find a book by ID
  if @book.present?
    render json: @book.as_json # Render the book details as JSON without including the image URL
  else
    render json: { error: 'Book not found' }, status: :not_found
  end
rescue => e
  render json: { error: 'An error occurred', message: e.message }, status: :internal_server_error
end

def overdue_books
  overdue_lends = Lend.where(returned: false).where('return_date < ?', Date.current)
  render json: overdue_lends, include: [:book, :user]
end



def update
  if @book.update(book_params)
    render json: @book
  else
    render json: @book.errors, status: :unprocessable_entity
  end
end

private

def book_params
  params.require(:book).permit(:title, :author, :isbn,  :genre, :pub_date, :status)
end
private

  def notify_overdue_books(overdue_books)
    overdue_books.each do |book|
      NotificationMailer.overdue_notification(book.lends.last.user, book).deliver_now
    end
  end


end
