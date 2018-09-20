class Api::FriendsController < ApplicationController
  def index
    render json: User.new_friend(current_user.added_friends)
  end

  def my_friends
  end

  def update
    current_user.added_friends << params[:id].to_i
    current_user.save
  end
end
