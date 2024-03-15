class StatisticsController < ApplicationController

    def index
        @lended_books = Lend.count
        @reserved_books = Reservation.count
        @new_books = Book.where(created_at: Time.now.beginning_of_month..Time.now.end_of_month).count
        @requested_books = Request.count
        @overdue_books = Lend.where("return_date < ?", Date.today).count

        render json: {
            lended_books: @lended_books,
            reserved_books: @reserved_books,
            new_books: @new_books,
            requested_books: @requested_books,
            overdue_books: @overdue_books
        }
    end
end
