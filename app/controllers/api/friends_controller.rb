class Api::FriendsController < ApplicationController
  def index
    render json: User.new_friend(current_user.friends)
  end

  def my_friends
    render json: User.added(current_user.friends)
  end

  def update
    current_user.friends << params[:id].to_i
    current_user.save
  end
end
