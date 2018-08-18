class EntriesController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        @entries=Entry.all
        render json: @entries
    end
    
    def create
        @entry=Entry.new(title: entry_params[:title], time: entry_params[:time], pages: entry_params[:pages])
        @entry.save
        render json: Entry.all
    end
    
    def destroy
        @entry=Entry.find(params[:id])
        @entry.destroy
    end
    
    
    private
    def entry_params
        params.require(:entry).permit(:title, :time, :pages)
    end
end
