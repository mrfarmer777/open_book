class ApplicationController < ActionController::Base
    
    def encode_token(payload)
        token=JWT.encode(payload,"flobble")
    end
    
    def auth_header
        header=request.headers['Authorization']
    end
    
    def decoded_token
        token=auth_header.split(" ")[1]
        decoded_token=JWT.decode(token,'flobble',true,{algorithm: "HS256"})
    end
    
    def current_user
       user_id=decoded_token[0]["user_id"]
       @user=User.find(user_id)
    end
end
