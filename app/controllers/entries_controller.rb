class EntriesController < ApplicationController
    #skipping authorized for now, because the components need to send the Authorization header in their requests now.
    skip_before_action :verify_authenticity_token
    
    
    def index
        @entries=Entry.all
        render json: @entries
    end
    
    def create
        @user_book=UserBook.find(entry_params[:user_book_id])
        #Calculating pages read based upon previous entry page location and this entry page location.
        pages_read_this_entry=(entry_params[:entry_page]-@user_book.entries.order(entry_page: :desc).first.entry_page)
        
        @entry=Entry.new(book_id: @user_book.book_id, minutes_read: entry_params[:minutes_read], entry_page: entry_params[:entry_page], user_id: current_user.id, user_book_id: @user_book.id, pages: pages_read_this_entry)
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
        params.require(:entry).permit(:user_book_id,:minutes_read, :entry_page)
    end
end
