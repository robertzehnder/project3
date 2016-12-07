class PhotosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @photos = Photo.all
    render json: @photos

  end

  def show
    @photo = Photo.find(params[:id])
    render json: @photo
  end

  def new
  end

  def create
    @photo = Photo.new(photo_params)
    puts "pre-save: #{@photo.inspect}"
   if @photo.save
     puts "success: #{@photo.inspect}"
     render json: @photo.to_json, status: :created
   else
     puts "failure: #{@photo.inspect}"
     render json: @photo.errors, status: :unprocessable_entity
   end
 end

 def update
   @photo = Photo.find(params[:id])
   puts "hey did this do anything********************"
    if @photo.update(photo_params)
      render json: @photo.to_json, status: :ok
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
 end

 def destroy
   @photo = Photo.find(params[:id])
    @photo.destroy
    render json: {message: "success"}, status: :ok
 end

private
  def photo_params
      params.require(:photo).permit(:id, :photoUrl, :color, :year, :car_id, :created_at, :updated_at)
    end

end
