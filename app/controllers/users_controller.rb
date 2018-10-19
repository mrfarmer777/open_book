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
            payload={user_id: @user.id}
            token=JWT.encode(payload,"flobble")
            render json: {user: @user, jwt: token}
        else
            render json: User.all
        end
    end
    
    def me
        
        #this route requies an authorization header be sent with the JWT token
        authHeader=request.headers["Authorization"]
        
        #select and decode the JWT
        token=authHeader.split(" ")[1]
        decoded=JWT.decode(token,"flobble", true, {algorithm: "HS256"})
        user_id=decoded[0]["user_id"]
        
        #We good.
        @user=User.find(user_id)
        render json: @user
    end
    
    
    private
    def user_params
        params.require(:user).permit(:name, :email, :type, :age, :password)
    end
end
