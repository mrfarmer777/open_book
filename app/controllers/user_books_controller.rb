class UserBooksController < ApplicationController
    #skipping authorized for now, because the components need to send the Authorization header in their requests now.
    skip_before_action :verify_authenticity_token, :authorized
    
    def show
        @ub=UserBook.find(params[:id])
        render json: @ub
    end
    
    def create
        @ub=UserBook.find_or_create_by(user_id: current_user.id, book_id: ub_params[:book_id], pages: ub_params[:pages])
        @ub.save
        render json: @ub
    end
    
    def destroy
        @ub=UserBook.find(params[:id])
        if !!@ub
            res=@ub.destroy
        end
        render json: res
    end
    
    
    private
    def ub_params
        params.require(:ub).permit(:book_id, :pages)
    end
        


end