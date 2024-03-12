class RequestsController < ApplicationController

    def index
      @requests = Request.all
      render json: @requests
    end

    def create
        user = User.find_by(email: params[:email])
      
        if user
          request = Request.new(request_params)
          request.user = user
      
          if request.save
            render json: request, status: :created
          else
            render json: request.errors, status: :unprocessable_entity
          end
        else
          render json: { error: 'User not found' }, status: :unprocessable_entity
        end
      end

    def update
      @request = Request.find_by(id: params[:id])
      if @request.update(request_params)
        render json: @request
      else
        render json: @request.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @request = Request.find_by(id: params[:id])
      if @request
         @request.destroy
      else
         render json: { error: "Request not found" }, status: :not_found
      end
    end

    def request_params
      params.require(:request).permit(:title, :author, :isbn,  :edition, :publisher, :email)
    end
end
