Rails.application.routes.draw do
  resources :users, only: [:index, :create]
  resources :books
  resources :entries, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "bookstats", to: "books#stats"
  get "entries/stats", to: "entries#stats"
  post '/login', to: "auth#create"
  get "users/me", to: "users#me"
  
end
