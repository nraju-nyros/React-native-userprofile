class Api::V1::UsersController < ApplicationController
  # before_action :authorize_request, except: :create
  # before_action :find_user, except: %i[create index]
 skip_before_action :verify_authenticity_token  

  # GET /users
  def index
    @users = User.all
    render json: @users, status: :ok
  end

  # GET /users/{username}
  def show
     @user = User.find(params[:id])   
    render json: @user, status: :ok
  end

   def new
    @user = User.new
  end

 
  # POST /users
  def create
     # binding.pry
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def update   
    @user = User.find(params[:id])   
    if @user.update_attributes(user_params)   
    else     
    render json: @user.errors, status: :unprocessable_entity
    end   
  end   

  # DELETE /users/{username}
  def destroy
    @user = User.find(params[:id])   
    @user.destroy
  end

  private

  private
  def user_params
    params.permit(:firstname, :lastname, :email, :password, :image)   
  end   
   
end 
