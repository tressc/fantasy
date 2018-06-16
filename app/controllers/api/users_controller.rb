class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def index
    if params[:query].present?
      @users = User.search(params[:query])
      render :search
    else
      # TODO: Remove if never needed
      @user = User.all
      render :index
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 403
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
