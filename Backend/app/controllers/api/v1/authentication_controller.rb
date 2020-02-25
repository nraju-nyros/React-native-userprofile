class Api::V1::AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login
  skip_before_action :verify_authenticity_token  

  # POST /auth/login
  def login
    @user = User.find_by_email(params[:email])

    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      @user.update_attribute(:token, token)
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                      user_id: @user.id, email: @user.email, mobile: @user.mobile, address: @user.address, firstname: @user.firstname,lastname: @user.lastname, image:@user.image}, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end