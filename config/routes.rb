Rails.application.routes.draw do
  #Trying to set up devise with this, 
  devise_for :students, path: "students", :controllers => {:omniauth_callbacks => 'users/google_oauth2/callback'}
  devise_for :teachers, path: "teachers"


  resources :books
  resources :entries, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "bookstats", to: "books#stats"
  get "entries/stats", to: "entries#stats"
  post '/login', to: "auth#create"
  get "users/me", to: "users#me"
  get '/welcome', to: "application#welcome"
  
end
