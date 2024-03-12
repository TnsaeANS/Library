class ReservationsController < ApplicationController
    def index
        @resrvations = Reservation.all
        render json: @reservations
    end

    def create
        reservation = Reservation.new(reservations_params)
        if reservation.save
            render json: reservation, status: :ok
        else
            render json: reservation.errors, status: :unprocessable_entity
        end
    end

    def update
        resrvation = Reservation.find(params[:id])
        if reservation.update(reservations_params)
            render json: reservation, status: :ok
        else
            render json: reservation.errors, status: :unprocessable_entity
        end
    end

    def destroy
        resrvation = Reservation.find(params[:id])
        if reservation.destroy
            render json: {msg: "succesfully deleted!"}, status: :ok
        else
            render json: {msg: "unable to delete a book"}, status: :ok
        end
    end

    def unreserved_books
        reserved_book_ids = Reservation.pluck(:book_id)
        unreserved_books = Book.where.not(id: reserved_book_ids)
    
        render json: unreserved_books
      end

    private
    def reservations_params
        params(:reservations).require(:reservation_date, :book_id, :user_id)
    end
end
