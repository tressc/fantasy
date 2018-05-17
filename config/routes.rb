Rails.application.routes.draw do

  get 'sessions/create'

  get 'sessions/destroy'

  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
