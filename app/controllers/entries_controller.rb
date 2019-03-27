class EntriesController < ApplicationController
    #skipping authorized for now, because the components need to send the Authorization header in their requests now.
    skip_before_action :verify_authenticity_token
    
    
    
    def index
        @entries=Entry.all
        render json: @entries
    end
    
    def create
        @user_book=UserBook.find(entry_params[:user_book_id])
        @entry=Entry.new(book_id: @user_book.book_id, time: entry_params[:time], pages: entry_params[:pages], user_id: current_user.id, user_book_id: @user_book.id)
        @entry.save
        @user_book.check_status
        render json: @entry
    end
    
    def destroy
        @entry=Entry.find(params[:id])
        @entry.destroy
    end
    
    def stats
        render json: {total_pages: Entry.total_pages, total_minutes: Entry.total_minutes, reading_rate: Entry.average_reading_rate}
    end
    
    
    private
    def entry_params
        params.require(:entry).permit(:user_book_id,:time, :pages)
    end
end
