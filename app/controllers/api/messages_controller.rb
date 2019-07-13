class Api::MessagesController < ApplicationController
  def index
    @messages = Group.where(id:params[:group_id]).includes(:user).where('id > ?', params[:last_id])
  end
end




