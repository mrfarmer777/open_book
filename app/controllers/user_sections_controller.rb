class UserSectionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    
    def show
        @us=UserSection.find(params[:id])
        render json: @us
    end
    
    
    # Also no create route needed for now
    # def create
    #     @us=UserSection.find_or_create_by(user_id: current_user.id, book_id: ub_params[:book_id], pages: ub_params[:pages])
    #     @us.save
    #     render json: @us
    # end
    
    def destroy
        @us=UserSection.find(params[:id])
        if !!@us
            if(@us.section.teacher==current_user || @us.user==current_user)
                res=@us.destroy
            end
        end
        render json: res
    end
    
    def update
        @us=UserSection.find(params[:id])
        if @us.user_id == current_user.id
            @us.update(us_params)
        end
        render json: @us
    end
    
    
    private
    def us_params
        params.require(:us).permit(:id,:approved)
    end
        


end