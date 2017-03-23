angular.module("MainModule").service("DAOService", ["$http",function($http){
    
	self = this;
	
	$http.get("products.json").then(function(data) {
		self.products = data;
	});
	
	$http.get("clients.json").then(function(data) {
		self.clients = data;
	});
	
	self.getProducts = function(){
		return self.products;
		
	};
	
	self.getClients = function(){
		return self.clients;
		
	};
	
	
	
}]);