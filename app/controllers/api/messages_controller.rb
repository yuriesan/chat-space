class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where(group_id:params[:group_id]).includes(:user).where('id > ?', params[:last_id])
  end
end
