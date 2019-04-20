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
        params.require(:section).permit(:name, :period, :start_date, :end_date, :public)
    end
end