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
        "the username you entered doesn't belong to an account." +
        " please check your username and try again."
      ], status: 403
    else
      render json: [
        "sorry, your password was incorrect. " +
        "please double-check your password."
      ], status: 403
    end
  end

  def destroy
    logout
    render json: {}
  end
end
