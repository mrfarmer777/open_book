class BooksController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        @books=Book.all
        render json: @books
    end
    
    def create
        @book=Book.new(title: book_params[:title], author: book_params[:author], pages: book_params[:pages], genres: book_params[:genres])
        @book.save
        render json: Book.all
    end
    
    def destroy
        @book=Book.find(params[:id])
        @book.destroy
    end
    
    
    private
    def book_params
        params.require(:book).permit(:title, :author, :pages, :genres)
    end
end
