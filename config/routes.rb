Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cars, defaults: { format: 'json' } do
    resources :photos
  end
  resources :photos

  root "cars#index"

end
