Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  resources :books
  resources :requests
  resources :reservations
  resources :lends
  resources :users

  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"


  get '/lendable_books', to: 'lends#lendable_books'
  get '/unreserved_books', to: 'reservations#unreserved_books'
  resources :statistics, only: :index
  # Defines the root path route ("/")
  # root "posts#index"
end
