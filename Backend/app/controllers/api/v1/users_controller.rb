class Api::V1::UsersController < ApplicationController
  # before_action :authorize_request, except: :create
  # before_action :find_user, except: %i[create index]
 skip_before_action :verify_authenticity_token  

  # GET /users
  def index
    @users = User.all
    render json: @users, status: :ok
  end



  # POST /auth/login
  def login
    @user = User.find_by_email(params[:email])

    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      @user.update_attribute(:token, token)
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                      user_id: @user.id, email: @user.email, mobile: @user.mobile, address: @user.address, firstname: @user.firstname,lastname: @user.lastname, image: url_for(@user.image)}, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def login_params
    params.permit(:email, :password)
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
    
    @user = User.new(user_params)
    @user.dummy_image
    if @user.save
      render json: {
              user_id: @user.id, email: @user.email, mobile: @user.mobile, address: @user.address, firstname: @user.firstname,lastname: @user.lastname, image: url_for(@user.image), status: :ok}
    
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def update   
    @user = User.find(params[:id])   
    if
      @user.update(user_params)

      @user.image.attach(io: image_io, filename: image_name)
       render json: {
                      user_id: @user.id, email: @user.email, mobile: @user.mobile, address: @user.address, firstname: @user.firstname,lastname: @user.lastname, image: url_for(@user.image)}, status: :ok
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
    params.permit(:firstname, :lastname,:mobile, :address, :email, :password)   
  end

  def image_io
    decoded_image = Base64.decode64(params[:user][:image])
     StringIO.new(decoded_image)
  end
  
  def image_name
    params[:user][:file_name]
  end



  
   
end 
