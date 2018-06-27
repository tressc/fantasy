class Api::MembershipsController < ApplicationController

  # TODO: may need to change some of this

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render :show
    else
      render json: ["cannot add that user"], status: 403
    end
  end

  def update
    @membership = Membership.find(params[:id])
    @membership.status = 'APPROVED'
    @membership.save
    render :show
  end

  def show
    @membership = Membership.find(params[:id])
  end

  def destroy
    @membership = Membership.find(params[:id])
    @membership.destroy
    render json: @membership
  end

  private
  def membership_params
    params.require(:membership).permit(:player_id, :campaign_id)
  end
end
