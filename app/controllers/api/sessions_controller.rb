class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      # TODO: render something different here
      render 'api/users/show'
    elsif !User.find_by(username: params[:user][:username])
      render json: [
        'invalid username'
      ], status: 403
    else
      render json: [
        'invalid password'
      ], status: 403
    end
  end

  def destroy
    logout
    render json: {}
  end
end
