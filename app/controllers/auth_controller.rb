class AuthController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    
    def create
        #find user by email if present
        @user=User.find_by(email: params[:email])
        
        #check-em in
        if @user && @user.authenticate(params[:password])
            
            #create a payload for the JWT
            payload={user_id: @user.id}
            
            #generate the JWT
            token=JWT.encode(payload,"flobble")
            
            #render specific json
            render json: { user: @user, jwt: token }
        end
    end
end