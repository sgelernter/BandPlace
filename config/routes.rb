Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users do 
      collection do
        get 'search'
      end
    end
    resources :releases do 
      collection do
        get 'random'
        get 'search'
      end
    end
    resources :songs do 
      collection do
        get 'search'
      end
    end
    resources :users, only: [:create, :show, :index, :update, :destroy]
    resources :releases, only: [:create, :index, :show, :update, :destroy]
    resources :songs, only: [:create, :index, :show, :update, :destroy]
    resources :color_profiles, only: [:update, :show] 
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"


end
