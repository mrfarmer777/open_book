class UsersController < ApplicationController
    #skipping for now, double check this later...
    skip_before_action :verify_authenticity_token
    
    def index
        @users=User.all
        render json: @users
    end
    
    #creating a new user for the first time from a user_params hash
    def create
        @user=User.new(name: user_params[:name], email: user_params[:email], type: user_params[:type], age: user_params[:age], password: user_params[:password])
        print @user.valid?
        if @user.save
            session[:user_id]=@user.id
            render json: User.find(@user.id)
        else
            render json: User.all
        end
    end
    
    def show
        @user=User.find(params[:id])
        render json: @user
    end
    
    
    private
    def user_params
        params.require(:user).permit(:name, :email, :type, :age, :password)
    end
end
