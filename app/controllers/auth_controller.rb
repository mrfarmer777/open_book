class AuthController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorized, only: [:create]

    
    
    def create
        #find user by email if present
        @user=User.find_by(email: params[:email])
        #check-em in
        if @user 
            
            #create a payload for the JWT
            payload={user_id: @user.id}
            
            token=encode_token(payload)
            
            #render specific json
            render json: { user: @user, jwt: token }
        else
            render json: {'message':'Ruh row. Something went wrong...'}
        end
    end
    
     
end