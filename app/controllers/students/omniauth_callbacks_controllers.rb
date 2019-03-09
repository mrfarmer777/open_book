class Students::OmniauthCallbacksController < Devise::OmniauthCallbacksController
   def google_oauth2
       @student=Student.from_omniauth(request.env["omniauth.auth"])
       
       if @student.persisted?
           sign_in @student, :event => :authentication
           set_flash_message(:notice, :success, :kind => "Google") if is_navigational_format?
       else
           session["devise.google_data"]=request.env["omniauth.auth"]
       end
       redirect_to "users/me"
   end
end