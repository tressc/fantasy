Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :campaigns, only: [:create, :update, :index, :show]
    resources :memberships, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
