class SessionsController < ApplicationController
    def new
    end
    
    #creates a new session if the user password is authenticated
    def create
        @user=User.find_by(email: params[:email])
        return head(:forbidden) unless @user.authenticate(params[:password])
        session[user_id]=@user.id
    end
    
    def destroy 
        session.delete :user_id
        redirect_to '/'
    end
end