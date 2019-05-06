Rails.application.routes.draw do
  resources :sections do
    post '/add_users', to: "sections#add_users"
    post '/remove_users', to: "sections#remove_users"
    
  end
  resources :users, only: [:index, :create, :show]
  resources :user_books, only: [:create, :destroy, :show]
  resources :user_sections, only: [:show,:destroy, :update]
  resources :books
  resources :entries, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "bookstats", to: "books#stats"
  get "entries/stats", to: "entries#stats"
  
  
  post '/login', to: "auth#create"
  
  
  get "/current_user_data", to: "users#current_user_data"
  get '/welcome', to: "application#welcome"
  
end
