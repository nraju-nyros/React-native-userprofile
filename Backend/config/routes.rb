Rails.application.routes.draw do
  

  namespace :api do
    namespace :v1 do
      resources :users
      post 'auth/login' => 'users#login'
    end
  end


end
