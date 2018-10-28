class UsersController < ApplicationController
    #skipping for now, double check this later...
    before_action :current_user, only: [:me]
    skip_before_action :verify_authenticity_token
    skip_before_action :authorized, only: [:create]
    
    def index
        @users=User.all
        render json: @users
    end
    
    #creating a new user for the first time from a user_params hash
    def create
        @user=User.new(name: user_params[:name], email: user_params[:email], type: user_params[:type], age: user_params[:age], password: user_params[:password])
        print @user.valid?
        if @user.save
            payload={user_id: @user.id}
            token = encode_token(payload)
            render json: {user: @user, jwt: token}
        else
            render json: User.all
        end
    end
    
    #Just a temporary action to see if login is working correctly
    def me
        if @user
            render json: @user
        else
            render json: {"message":"Incorrect JWT token"}
        end
    end
    
   
    
    
    
    private
    def user_params
        params.require(:user).permit(:name, :email, :type, :age, :password)
    end
end
