Rails.application.routes.draw do
  
  resources :books
  root 'books#index'
  get 'books/index'
  get 'books/show'
  get 'books/new'
  get 'books/create'
  get 'books/edit'
  get 'books/update'
  get 'books/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :todo_lists
      resources :users

      post 'auth/login' => 'authentication#login'

    end
  end


end
