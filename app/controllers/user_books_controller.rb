class UserBooksController < ApplicationController
    #skipping authorized for now, because the components need to send the Authorization header in their requests now.
    skip_before_action :verify_authenticity_token, :authorized
    
    
    def create
        @user_book=UserBook.find_or_create_by(user_id: current_user.id, book_id: ub_params[:book_id], pages: ub_params[:pages])
        @user_book.save
        render json: @user_book
    end
    
    def destroy
        @user_book=UserBook.find(params[:id])
        if !!@user_book
            res=@user_book.destroy
        end
        render json: res
    end
    
    
    private
    def ub_params
        params.require(:ub).permit(:book_id, :pages)
    end
        


end