class CarsController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    @cars = Car.all
    render :json => @cars.to_json(:include => :photos)
  end

  def show
    @car = Car.find(params[:id])
    render json: @car.to_json(:include => :photos)
  end

  def destroy
    @car = Car.find(params[:id])
     @car.destroy
     render json: {message: "success"}, status: :ok
  end

end
