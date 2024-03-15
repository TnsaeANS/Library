class LendsController < ApplicationController
    def index
        @lends = Lend.all
        render json: @lends
    end

    def lendable_books
        @lendable_books = Book.where(status: "available")
        render json: @lendable_books
    end

    def show
        @lend = Lend.find_by(id: params[:id])
        if @lend
            render json: @lend
        else
            render json: { error: "Lend not found" }, status: :not_found
        end
    end

    def create 
        @lend = Lend.new(lend_params)
        if @lend.save
            Book.find_by(id: lend_params[:book_id]).update(status: "borrowed")
            render json: @lend, status: :created
        else
            render json: @lend.errors, status: :unprocessable_entity
        end
    end

    def update
        @lend = Lend.find_by(id: params[:id])
        if @lend
            @lend.update(lend_params)
            render json: @lend
        else
            render json: { error: "Lend not found" }, status: :not_found
        end
    end

    def destroy
        @lend = Lend.find_by(id: params[:id])
        if @lend
            @lend.destroy
        else
            render json: { error: "Lend not found" }, status: :not_found
        end
    end

    private

    def lend_params
        params.require(:lend).permit(:lent_date, :return_date, :user_id, :book_id, :email)
    end
end
