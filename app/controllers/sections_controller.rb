class SectionsController < ApplicationController
    #skipping for API testing purposes
    skip_before_action :verify_authenticity_token

    
    
    def create
        @user=current_user
        if @user && @user.is_teacher?
            @section=Section.new(section_params)
            @section.assign_attributes(teacher_id: @user.id)
            if @section.valid?
                @section.save
                render json: @section
            else
                render_json_validation_error(@section)
            end
        else
            render_custom_error(@section,"Please login to a teacher account to create a section")
        end
    end
    
    
    #Creates UserSection object for this section, users are already created elsewhere.
    #You can't create users this way so a nested resource seems unnecessary
    def add_users
        @section=Section.find(params[:section_id])
        if @section.teacher==current_user
            #buggy emails sent here for error reporting/rendering
            errs=[]
            emails=section_params[:users_emails].split("; ")
            emails.each do |e|
                @user=User.find_by(email: e)
                if @user
                    
                    #If a valid users is found, find or initialize this user_section, make it active if the section is active and the user_section is approved by the user
                    user_section=UserSection.find_or_initialize_by(user_id: @user.id, section_id: @section.id, active: (@section.active && user_section.approved))
                    user_section.save
                else
                    #user isn't already created, we'll handle that in a minute
                    #Send them to an invite/email flow
                    
                    #pushing buggy users to the array for eventual reporting
                    errs.push(@user)
                end
            end
        end
        render json: @section
    end
    
    
    #Removes a UserSection if the current user is the section's teacher
    def remove_users
        @section=Section.find(params[:section_id])
        if @section.teacher==current_user            
            emails=section_params[:users_emails].split("; ")
            emails.each do |e|
                @user=User.find_by(email: e)
                if @user
                    user_section=UserSection.find_by(user_id: @user.id, section_id: @section.id)
                    if user_section
                        user_section.destroy
                    end
                end
            end
        end
        render json: @section
    end
    
    
    def show
        @section=Section.find(params[:id])
        render json: @section
    end
    
    def update
        @section=Section.find(params[:id])
        @section.update(section_params)
        render json: @section
    end
    
    def destroy
        @section=Section.find(params[:id])
        if @section.teacher == current_user
            @section.destroy
        end
    end
    
    
    private
    
    
    def section_params
        params.require(:section).permit(:name, :period, :start_date, :end_date, :public, :users_emails)
    end
end