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
    
    
    #Creates User Section object for this section, users are already created elsewhere.
    #You can't create users this way so a nested resource seems unnecessary
    def add_users
        @section=Section.find(params[:section_id])
        if @section.teacher==current_user
            
            emails=section_params[:users_emails].split("; ")
            emails.each do |e|
                @user=User.find_by(email: e)
                if @user
                    UserSection.find_or_initialize_by(user_id: @user.id, section_id: @section.id)
                else
                    #user isn't already created, we'll handle that in a minute
                    #Send them to an invite/email flow
                end
            end
        end
        render json: @section
    end
    
    def remove_users
        @section=Section.find(params[:section_id])
        if @section.teacher==current_user            
            emails=section_params[:users_emails].split("; ")
            emails.each do |e|
                @user=User.find_by(email: e)
                if @user
                    UserSection.find_by(user_id: @user.id, section_id: @section.id).destroy
                else
                    #user isn't already created, we'll handle that in a minute
                    #Send them to an invite/email flow
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