class Api::FoldersController < ApplicationController
  def create
    @folder = Folder.new(folder_params)
    if @folder.save
      render :show
    else
      render json: @folder.errors.full_messages, status: 403
    end
  end

  def update
    @folder = Folder.find(params[:id])
    # TODO does this work?
    @folder.update_attributes(folder_params)
    @folder.save
    render json: @folder
  end

  def destroy
    @folder = Folder.find(params[:id])
    @folder.destroy
    render json: @folder
  end

  def show
    @folder = Folder.find(params[:id])
  end

  private

  def folder_params
    params.require(:folder).permit(:campaign_id, :title, :status)
  end
end
