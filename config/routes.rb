ActionController::Routing::Routes.draw do |map|
  # The priority is based upon order of creation: first created -> highest priority.

  # Sample of regular route:
  #   map.connect 'products/:id', :controller => 'catalog', :action => 'view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   map.purchase 'products/:id/purchase', :controller => 'catalog', :action => 'purchase'
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   map.resources :products

  # Sample resource route with options:
  #   map.resources :products, :member => { :short => :get, :toggle => :post }, :collection => { :sold => :get }

  # Sample resource route with sub-resources:
  #   map.resources :products, :has_many => [ :comments, :sales ], :has_one => :seller

  # Sample resource route with more complex sub-resources
  #   map.resources :products do |products|
  #     products.resources :comments
  #     products.resources :sales, :collection => { :recent => :get }
  #   end


  map.with_options(:controller => 'aws/instances') do |accounts|
    accounts.output_instance   "/aws/instances/:id/output",   :action => 'output'
    accounts.terminate_instance  "/aws/instances/:id/terminate",  :action => 'terminate'
    accounts.reboot_instance  "/aws/instances/:id/reboot",  :action => 'signrebootup'
  end
  
  

  map.with_options(:controller => 'aws/addresses') do |accounts|
    accounts.allocate_address   "/aws/addresses/allocate",   :action => 'allocate'
    accounts.release_address  "/aws/addresses/:id/release",  :action => 'release'
    accounts.associate_address  "/aws/addresses/:id/associate",  :action => 'associate'
    accounts.disassociate_address  "/aws/addresses/:id/disassociate",  :action => 'disassociate'
  end
  
  
  map.with_options(:controller => 'aws/groups') do |accounts|
    accounts.create_group   "/aws/groups/create",   :action => 'create'
    accounts.delete_group   "/aws/groups/:id/delete",   :action => 'delete'
    accounts.revoke_group  "/aws/groups/:id/revoke",  :action => 'revoke'
    accounts.authorize_group  "/aws/groups/:id/authorize",  :action => 'authorize'
  end
  
  
  map.with_options(:controller => 'aws/keys') do |accounts|
    accounts.create_key   "/aws/keys/create",   :action => 'create'
    accounts.delete_key   "/aws/keys/:id/delete",   :action => 'delete'
  end
  

  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
