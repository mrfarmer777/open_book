class ApplicationController < ActionController::Base
    before_action :authorized
    skip_before_action :authorized, only: [:welcome]
    
    
    # Handling jwt token authentication ////////////////////////
    def encode_token(payload)
        token=JWT.encode(payload,"flobble")
    end
    
    def auth_header
        header=request.headers['Authorization']
    end
    
    def decoded_token
        if auth_header
            token=auth_header.split(" ")[1]
            begin 
                decoded_token=JWT.decode(token,'flobble',true,{algorithm: "HS256"})
            rescue JWT::DecodeError
                #array with a hash, because thats what the other lines are expecting
                [{}]
            end
        else
        end
    end
    
    
    # Authorization Helpers
    def current_user
        if decoded_token
            if user_id=decoded_token[0]["user_id"]
              @user=User.find(user_id)
            else
            end
        else
        end
    end
    
    def logged_in?
        !!current_user
    end
    
    
    def authorized
        redirect_to "/welcome" unless logged_in?
    end
    
    def welcome
        render json: {message: "Please log in"}
    end
    
    # Error Handling for Validations
    def render_json_validation_error(resource)
        render json: resource, status: :bad_request, adapter: :json_api, serializer: ActiveModel::Serializer::ErrorSerializer
    end
    
    def render_custom_error(resource, msg)
        render json: {message: msg, resource: resource}
    end
    
    
end
