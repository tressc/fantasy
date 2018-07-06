class Api::PagesController < ApplicationController
  def create
    @page = Page.new(page_params)
    if @page.save
      render :show
    else
      render json: @page.errors.full_messages
    end
  end

  def update
    @page = Page.find(params[:id])
    # TODO test if this works
    @page.update_attributes(page_params)
    # TODO is save necessary?
    @page.save
    render :show
  end

  def destroy
    @page = Page.find(params[:id])
    @page.destroy
    render json: @page
  end

  def show
    @page = Page.find(params[:id])
  end

  private

  def page_params
    params.require(:page).permit(:folder_id, :status, :title, :body)
  end
end
