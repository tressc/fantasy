class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def edit
  end

  def update
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
