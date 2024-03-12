class LendsController < ApplicationController
def lend
    book = Book.find(params[:id])
    book.update(lent: true)
    redirect_to books_path
end
end
