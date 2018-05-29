class Api::CampaignsController < ApplicationController
  def create
    @campaign = Campaign.new(campaign_params)
    @campaign.gm_id = current_user.id
    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 403
    end
  end

  # TODO: params nesting may need to be reworked

  def show
    @campaign = Campaign.find(params[:id])
  end

  def destroy
    @campaign = Campaign.find(params[:id])
    if current_user.id == @campaign.gm.id
      @campaign.destroy
    end
  end

  def update
    @campaign = Campaign.find(params[:id])
    @campaign.title = params[:campaign][:title]
    @campaign.description = params[:campaign][:description]
    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 403
    end
  end

  private
  def campaign_params
    params.require(:campaign).permit(:title, :description)
  end
end
